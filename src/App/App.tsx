import * as React from "react";
import { Icon, Select, Switch } from "antd";

import MapView from "components/MapView/index";
import DetailsView from "components/DetailsView/index";

import {
  AppContainer,
  ContentHeader,
  ContentPane,
  Logo,
  MapPane,
  ResponsiveDrawer,
  SettingsDescription,
  SettingsItem,
  SettingsLabel
} from "./styles";
import Themes from "./themes";
import { IProps, IState, ThemeType } from "./types";

class App extends React.Component<IProps, IState> {
  readonly state: IState = {
    settingsOpen: false
  };

  handleSettingsOpen = () => this.setState({ settingsOpen: true });
  handleSettingsClose = () => this.setState({ settingsOpen: false });

  render() {
    return (
      <AppContainer>
        <Logo />
        <MapPane>
          <MapView />
        </MapPane>
        <ContentPane>
          <ContentHeader>
            <div>Details</div>
            <Icon type="setting" onClick={this.handleSettingsOpen} />
          </ContentHeader>
          <DetailsView />
        </ContentPane>
        <ResponsiveDrawer
          title="Settings"
          onClose={this.handleSettingsClose}
          visible={this.state.settingsOpen}
        >
          <SettingsItem>
            <div>
              <SettingsLabel>Theme</SettingsLabel>
              <SettingsDescription>
                Changes the look of the app.
              </SettingsDescription>
            </div>
            <Select defaultValue={ThemeType.DARK} style={{ width: "128px" }}>
              {Object.keys(Themes).map(theme => (
                <Select.Option key={theme} value={theme}>
                  {theme}
                </Select.Option>
              ))}
            </Select>
          </SettingsItem>
          <SettingsItem>
            <div>
              <SettingsLabel>Show all nodes</SettingsLabel>
              <SettingsDescription>
                Displays base/fixed nodes on the map.
              </SettingsDescription>
            </div>
            <Switch defaultChecked />
          </SettingsItem>
        </ResponsiveDrawer>
      </AppContainer>
    );
  }
}

export default App;
