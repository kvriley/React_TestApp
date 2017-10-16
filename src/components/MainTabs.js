import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {AppTable} from './Table';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    width: '80%',
  },
  tabItemContainer: {
    backgroundColor: '#eeeeee',
  },
  tab: {
    color: 'black',    
    fontFamily: 'initial',
    fontSize: '12px',
  },
  content: {
    minHeight: '400px',
  }
};

const MainTabs = () => (
  <Tabs 
    tabItemContainerStyle={styles.tabItemContainer}
    contentContainerStyle={styles.content}
    >
    <Tab label="Procedure Inventory" style={styles.tab} >
      <div>
        <AppTable />
      </div>
    </Tab>
    <Tab label="Cycle Time Tracking"  style={styles.tab}>
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="Policies"
      data-route="/home"
      style={styles.tab}
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="Not Documented"
      data-route="/home"
      style={styles.tab}
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="Pivot Tables"
      data-route="/home"
      style={styles.tab}
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="Periodic Review"
      data-route="/home"
      style={styles.tab}
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
</Tabs>
);

export default MainTabs;
