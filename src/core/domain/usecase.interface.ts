export interface IUseCase<IRequest> {
  execute(request?: IRequest, dependencies?: Record<string, unknown>);
}
