import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Props from './tabs/Props/Props';
import Points from './tabs/Points/Points';
import Quize from './tabs/Quize/Quize';

function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Quize</Tab>
        <Tab>Points</Tab>
        <Tab>Props</Tab>
      </TabList>

      <TabPanel>
        <Quize />
      </TabPanel>
      <TabPanel>
        <Points />
      </TabPanel>
      <TabPanel>
        <Props />
      </TabPanel>
    </Tabs>
  );
}

export default App;
