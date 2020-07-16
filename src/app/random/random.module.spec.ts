import { RandomModule } from './random.module';

describe('RandomModule', () => {
  let randomModule: RandomModule;

  beforeEach(() => {
    randomModule = new RandomModule();
  });

  it('should create an instance', () => {
    expect(randomModule).toBeTruthy();
  });
});
