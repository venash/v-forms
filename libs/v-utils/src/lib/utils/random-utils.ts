export class RandomUtils {

  static randomId() {
    return Math.random().toString(36).substring(2);
  }

}
