import { GlobalPanelModule } from './global-panel.module';

describe('GlobalPanelModule', () => {
  let globalPanelModule: GlobalPanelModule;

  beforeEach(() => {
    globalPanelModule = new GlobalPanelModule();
  });

  it('should create an instance', () => {
    expect(globalPanelModule).toBeTruthy();
  });
});
