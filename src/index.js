import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const groups =  [
                    {
                        name : "Groupe A",
                        teams : [
                            {
                                name: "Uruguay",
                                picture : "KnSUdQWiGRoy89q4x85IgA_48x48.png",
                                goals: 5,
                                points: 9,
                                victories: 3,
                                draws : 0,
                                defeats : 0, 
                            },
                            {
                                name: "Russie",
                                picture : "5Y6kOqiOIv2C1sP9C_BWtA_48x48.png",
                                goals: 8,
                                points: 6,
                                victories: 3,
                                draws : 0,
                                defeats : 0, 
                            },
                            {
                                name: "Arabie Saoudite",
                                picture : "QoAJxO46fHid3_T-7nRZ0Q_48x48.png",
                                goals: 2,
                                points: 3,
                                victories: 3,
                                draws : 0,
                                defeats : 0, 
                            },
                            {
                                name: "Egypte",
                                picture : "KnSUdQWiGRoy89q4x85IgA_48x48.png",
                                goals: 15,
                                points: 3,
                                victories: 3,
                                draws : 0,
                                defeats : 0, 
                            },
                       ]
                    },
                    {
                        name : "Groupe B",
                        teams : [
                            {
                                name: "Uruguay",
                                picture : "KnSUdQWiGRoy89q4x85IgA_48x48.png",
                                goals: 5,
                                points: 9,
                                victories: 3,
                                draws : 0,
                                defeats : 0, 
                            },
                            {
                                name: "Russie",
                                picture : "5Y6kOqiOIv2C1sP9C_BWtA_48x48.png",
                                goals: 8,
                                points: 6,
                                victories: 3,
                                draws : 0,
                                defeats : 0, 
                            },
                            {
                                name: "Arabie Saoudite",
                                picture : "QoAJxO46fHid3_T-7nRZ0Q_48x48.png",
                                goals: 2,
                                points: 3,
                                victories: 3,
                                draws : 0,
                                defeats : 0, 
                            },
                            {
                                name: "Egypte",
                                picture : "KnSUdQWiGRoy89q4x85IgA_48x48.png",
                                goals: 15,
                                points: 3,
                                victories: 3,
                                draws : 0,
                                defeats : 0, 
                            },
                       ]
                    },
                ];
                
ReactDOM.render(<App groups={groups} />, document.getElementById('root'));
registerServiceWorker();
