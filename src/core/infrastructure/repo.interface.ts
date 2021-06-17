export abstract class IRepo<T> {
  public abstract save(t: T): Promise<unknown>;
}
