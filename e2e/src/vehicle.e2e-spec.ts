
import { VehiclePage } from './vehicle.po';

describe('workspace-project App', () => {
  let page: VehiclePage;

  beforeEach(() => {
    page = new VehiclePage();
  });

  it('should display vehicle message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Vehicle page!');
  });
});
