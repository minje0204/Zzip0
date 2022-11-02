// @ts-nocheck

import React, { useState } from 'react';
import Draggable from 'react-draggable';
import todo from '../../../styles/TodoList.module.css';
import widget from '../../../styles/Widget.module.css';
import styles from '../../../styles/Home.module.css';
import TimerStudy from './TimerStudy';
import TimerTodo from './TimerTodo';
import TimerExam from './TimerExam';
import { Tabs, Tab, Box } from '@mui/material';
import { useRecoilState } from 'recoil';
import { TimerModalOpen } from '../../../lib/recoil/Modal';

interface Test {}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Timer: Test = () => {
  const [timerOpen, setTimerOpen] = useRecoilState(TimerModalOpen);
  function timerContent(n: number) {
    return [<TimerStudy />, <TimerTodo />, <TimerExam />][n];
  }
  const [choosedTab, setChoosedTab] = useState(0);
  const nodeRef = React.useRef(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setChoosedTab(newValue);
  };
  return (
    <>
      {timerOpen ? (
        <Draggable nodeRef={nodeRef}>
          <div ref={nodeRef} className={widget.widget}>
            <div className={widget.widgetHeader}>
              <div className={widget.widgetTitle}>Timer</div>
              <div className={widget.widgetCloseBtnContainer}>
                <button id={widget.widgetCloseBtn}>
                  <img
                    src="/minus.png"
                    width="18px"
                    onClick={() => {
                      setTimerOpen(false);
                    }}
                  ></img>
                </button>
              </div>
            </div>
            <div className={widget.widgetContent}>
              <TabPanel value={choosedTab} index={choosedTab}>
                {timerContent(choosedTab)}
              </TabPanel>
            </div>
            <div className={widget.widgetFooter}>
              <Tabs
                value={choosedTab}
                onChange={handleChange}
                aria-label="basic tabs example"
                textColor="inherit"
                indicatorColor="secondary"
                centered
              >
                <Tab label="순공" {...a11yProps(0)} />
                <Tab label="목표" {...a11yProps(1)} />
                <Tab label="수능" {...a11yProps(2)} />
              </Tabs>
            </div>
          </div>
        </Draggable>
      ) : null}
    </>
  );
};

export default Timer;
