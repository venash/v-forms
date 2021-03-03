import {
  Component,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Subject} from 'rxjs';
import {startWith, takeUntil} from 'rxjs/operators';
import {VLoggerService} from '@venash-forms/v-logger';

interface DebugFormControlInfo {
  formControlName: string;
  value: any;
  valid: boolean;
}

@Component({
  selector: 'v-form-group-debugger',
  templateUrl: './form-group-debugger.component.html',
  styleUrls: ['./form-group-debugger.component.scss']
})
export class FormGroupDebuggerComponent
  implements OnInit, OnDestroy, OnChanges {
  constructor(private logger: VLoggerService) {}

  @Input()
  formGroup: FormGroup;

  @Input()
  extractFormControlsNames: string[];

  destroy$ = new Subject();
  groupStatus: boolean;

  formControlInfo: DebugFormControlInfo[];

  ngOnInit(): void {
    this.startDebug();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.formGroup) {
      this.startDebug();
    }
  }

  private startDebug() {
    this.destroy();
    this.listenStatus();
    this.listenValues();
  }

  private listenStatus() {
    this.formGroup.statusChanges
      .pipe(startWith(this.formGroup.status), takeUntil(this.destroy$))
      .subscribe((status) => {
        this.logger.debug(status);
        this.groupStatus = status;
      });
  }

  private listenValues() {
    this.formGroup.valueChanges
      .pipe(
        startWith(this.formGroup.getRawValue()),
        takeUntil(this.destroy$))
      .subscribe((data) => {
        this.logger.debug('ValueChanges', data);
        this.formControlInfo = this.extractFormControlInfo();
      });
  }

  private destroy() {
    this.destroy$.next();
  }

  private extractFormControlInfo(): DebugFormControlInfo[] {
    const keys = this.formGroup.controls ? Object.keys(this.formGroup.controls) : null;
    if (keys?.length) {
      return keys
        .filter(key => {
          if (this.extractFormControlsNames) {
            return this.extractFormControlsNames.includes(key)
          }
          return true;
        })
        .map(key => {
        const c = this.formGroup.get(key);
        return {
          formControlName: key,
          value: c.value,
          valid: c.valid,
        }
      })
    }
    return [];
  }
}
