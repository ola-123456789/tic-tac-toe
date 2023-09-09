"use strict"

let playerSideImg = document.getElementById('player_side');
let inputs = document.querySelectorAll('input');
let labels = document.querySelectorAll('label');
let inputsImgs = document.getElementsByClassName('x_o_game_inputs');
let playerSidePar = document.getElementById('player_side_par');
let cpuSidePar = document.getElementById('cpu_side_par');
let playerSideResultPar1 = document.getElementById('player_side_result_par');
let playerSideResultPar2 = document.getElementById('cpu_side_result_par');
let tiesResultPar = document.getElementById('ties_result_par');
let gameResultDiv = document.getElementById('game_result_div');
let mainContentForRestartGame = document.getElementById('main_content_for_restart_game');
let mainContentForGameResult = document.getElementById('main_content_for_game_result');
let mainContenDivtForGameResult = document.getElementById('main_content_div_for_game_result');
let whoTakesRoundDiv = document.getElementById('who_takes_round_div');
let gameResultPar = document.getElementById('game_result_par');
let winnersPar = document.getElementById('winners_par');
let winnersImg = document.getElementById('winners_img');
let gameResultMainContent = document.getElementById('main_content_for_game_result');
let iconRestartDiv = document.getElementById('icon_restart_div');
let btnsDivForGameResult = document.getElementById('btns_div');
let quiteBtn = document.getElementById('quit_btn');
let nextRoundBtn = document.getElementById('next_round_btn');
let cancelBtn = document.getElementById('cancel_btn');
let restartBtn = document.getElementById('restart_btn');
let closeWindowtBtn = document.getElementById('close_window_btn');
let logoImg = document.getElementById('logo_img');





let inputsArr = Array.from(inputs);
let labelsArr = Array.from(labels);
let inputsImgsArr = Array.from(inputsImgs);
let playerSide;
let player1;
let player2;
let cpuSide;
let winningArr = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["1", "4", "7"], ["2", "5", "8"], ["3", "6", "9"], ["1", "5", "9"], ["3", "5", "7"],];
let filledInputs = [];
let idsArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
let player1Input = [];
let player2Input = [];
let player1InputClicked;
let cpuInputClicked;
let playerOptions;
let computerOptions;
let correctOption;
let clickOption;
let index;
let randomIndex;
let possibleOptions;
let newArrCpu = [];
let newArrCpu2 = [];
let newArrPlayer = [];
let newArrPlayer2 = [];
let newArrCpuFor1 = [];
let newArrCpu2For1 = [];
let newArrPlayerFor1 = [];
let newArrPlayer2For1 = [];
let cpuWinning = false;
let playerWinning = false;
let cpuForWinning = false;
let playerForWinning = false;
let winningOption;
let correctChoise;
let correctArr = [];
let cpuWinningArrFor1 = [];
let countWinPlayer1 = 0;
let countWinPlayer2 = 0;
let countTies = 0;
let length;

let player = localStorage.getItem('playerSide');
let gameType = localStorage.getItem('gameType');










let functions = {
    algorithmFunction: (filledInputs) => {
        console.log("functionWhenXChecked")
        if (player === "x") {
            if (filledInputs.length === 1) {
                if (player1Input[0] === "1" || player1Input[0] === "3" || player1Input[0] === "7" || player1Input[0] === "9") {
                    setTimeout(() => {
                        cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "5" && idsArr.includes("5"))[0];
                        cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                        player2Input.push(cpuInputClicked.id);
                        filledInputs.push(cpuInputClicked.id);
                        index = idsArr.indexOf(cpuInputClicked.id);
                        if (idsArr.includes(cpuInputClicked.id)) {
                            idsArr.splice(index, 1);
                        }
                        playerSideImg.setAttribute('src', './assets/icon-x(second).svg');

                    }, 250);

                } else if (player1Input[0] === "2" || player1Input[0] === "4" || player1Input[0] === "6" || player1Input[0] === "8") {
                    setTimeout(() => {
                        possibleOptions = ["1", "3", "7", "9"]
                        randomIndex = Math.floor(Math.random() * possibleOptions.length);
                        cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                        cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                        player2Input.push(cpuInputClicked.id);
                        filledInputs.push(cpuInputClicked.id);

                        index = idsArr.indexOf(cpuInputClicked.id);
                        if (idsArr.includes(cpuInputClicked.id)) {
                            idsArr.splice(index, 1);
                        }
                        console.log(idsArr)
                        playerSideImg.setAttribute('src', './assets/icon-x(second).svg');

                    }, 250);
                } else if (player1Input[0] === "5") {
                    setTimeout(() => {
                        possibleOptions = ["1", "3", "7", "9"]
                        randomIndex = Math.floor(Math.random() * possibleOptions.length);
                        cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                        cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                        player2Input.push(cpuInputClicked.id);
                        filledInputs.push(cpuInputClicked.id);

                        index = idsArr.indexOf(cpuInputClicked.id);
                        if (idsArr.includes(cpuInputClicked.id)) {
                            idsArr.splice(index, 1);
                        }
                        console.log(idsArr)
                        playerSideImg.setAttribute('src', './assets/icon-x(second).svg');

                    }, 250);
                }


            }
        } else if (player === "o") {
            if (filledInputs.length === 0) {

                setTimeout(() => {
                    possibleOptions = ["1", "3", "7", "9", "5"];
                    // possibleOptions = ["7"];
                    randomIndex = Math.floor(Math.random() * possibleOptions.length);
                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                    cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                    player2Input.push(cpuInputClicked.id);
                    filledInputs.push(cpuInputClicked.id);
                    index = idsArr.indexOf(cpuInputClicked.id);
                    if (idsArr.includes(cpuInputClicked.id)) {
                        idsArr.splice(index, 1);
                    }
                    playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                }, 250);
            } else if (filledInputs.length === 2) {
                if (player2Input[0] === "1") {
                    if (player1Input[0] === "5") {
                        setTimeout(() => {
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "9" && idsArr.includes("9"))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "2") {
                        setTimeout(() => {
                            possibleOptions = ["3", "8"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "3") {
                        setTimeout(() => {
                            possibleOptions = ["7", "9"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "4" || player1Input[0] === "6") {
                        setTimeout(() => {
                            possibleOptions = ["3", "5"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "7") {
                        setTimeout(() => {
                            possibleOptions = ["3", "9"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "8") {
                        setTimeout(() => {
                            possibleOptions = ["3", "5", "7"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "9") {
                        setTimeout(() => {
                            possibleOptions = ["3", "7"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    }
                } else if (player2Input[0] === "3") {
                    if (player1Input[0] === "5") {
                        setTimeout(() => {
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "7" && idsArr.includes("7"))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "1") {
                        setTimeout(() => {
                            possibleOptions = ["7", "9"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "2") {
                        setTimeout(() => {
                            possibleOptions = ["1", "8"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "4" || player1Input[0] === "6") {
                        setTimeout(() => {
                            possibleOptions = ["1", "5"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "7") {
                        setTimeout(() => {
                            possibleOptions = ["1", "9"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "8") {
                        setTimeout(() => {
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "1" && idsArr.includes("1"))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "9") {
                        setTimeout(() => {
                            possibleOptions = ["1", "7"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    }
                } else if (player2Input[0] === "5") {
                    if (player1Input[0] === "1") {
                        setTimeout(() => {
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "9" && idsArr.includes("9"))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "2") {
                        setTimeout(() => {
                            possibleOptions = ["1", "3", "4", "6", "7", "9"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "3") {
                        setTimeout(() => {
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "7" && idsArr.includes("7"))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "4") {
                        setTimeout(() => {
                            possibleOptions = ["1", "2", "3", "7", "8", "9"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "6") {
                        setTimeout(() => {
                            possibleOptions = ["1", "2", "7", "8", "9"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "7") {
                        setTimeout(() => {
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "3" && idsArr.includes("3"))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "8") {
                        setTimeout(() => {
                            possibleOptions = ["1", "3", "4", "6", "7", "9"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "9") {
                        setTimeout(() => {
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "1" && idsArr.includes("1"))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    }
                } else if (player2Input[0] === "7") {
                    if (player1Input[0] === "5") {
                        setTimeout(() => {
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "3" && idsArr.includes("3"))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "1") {
                        setTimeout(() => {
                            possibleOptions = ["3", "9"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "2") {
                        setTimeout(() => {
                            possibleOptions = ["1", "5", "9"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "3") {
                        setTimeout(() => {
                            possibleOptions = ["1", "9"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "4" || player1Input[0] === "6") {
                        setTimeout(() => {
                            possibleOptions = ["5", "9"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "8") {
                        setTimeout(() => {
                            possibleOptions = ["1", "4", "5"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "9") {
                        setTimeout(() => {
                            possibleOptions = ["1", "3"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    }
                } else if (player2Input[0] === "9") {
                    if (player1Input[0] === "5") {
                        setTimeout(() => {
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "1" && idsArr.includes("1"))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "1") {
                        setTimeout(() => {
                            possibleOptions = ["3", "7"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "2") {
                        setTimeout(() => {
                            possibleOptions = ["5", "7"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "3") {
                        setTimeout(() => {
                            possibleOptions = ["1", "7"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "4" || player1Input[0] === "6") {
                        setTimeout(() => {
                            possibleOptions = ["5", "7"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "7") {
                        setTimeout(() => {
                            possibleOptions = ["1", "3"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    } else if (player1Input[0] === "8") {
                        setTimeout(() => {
                            possibleOptions = ["3", "5", "6"];
                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                            player2Input.push(cpuInputClicked.id);
                            filledInputs.push(cpuInputClicked.id);
                            index = idsArr.indexOf(cpuInputClicked.id);
                            if (idsArr.includes(cpuInputClicked.id)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                        }, 250);
                    }
                }
            }
        }


        if (filledInputs.length >= 3) {



            for (let i = 0; i < winningArr.length; i++) {
                playerOptions = winningArr[i].filter((values) => player1Input.includes(values));
                computerOptions = winningArr[i].filter((values) => player2Input.includes(values));
                if (playerOptions.length === 2) {
                    newArrPlayer.push(playerOptions)
                    if (idsArr.includes(winningArr[i][0]) || idsArr.includes(winningArr[i][1]) || idsArr.includes(winningArr[i][2])) {
                        newArrPlayer2.push(winningArr[i])
                    }
                }
                if (newArrPlayer2.length > 0) {
                    for (let a = 0; a < newArrPlayer2.length; a++) {
                        let winnerPlayer1 = () => {
                            return newArrPlayer2[a].every((value) => !idsArr.includes(value))
                        }

                        let winnerPlayer1Result = winnerPlayer1();
                        if (winnerPlayer1Result) {
                            correctOption = newArrPlayer2[a];
                            console.log(newArrPlayer2[a])
                            index = newArrPlayer2.indexOf(correctOption)
                            if (newArrPlayer2.includes(correctOption)) {
                                newArrPlayer2.splice(index, 1);
                            }
                        }
                    }

                    console.log(newArrPlayer2)
                }
                if (newArrPlayer2.length > 0) {
                    playerWinning = true;
                } else {
                    playerWinning = false;
                }

                if (computerOptions.length === 2) {
                    newArrCpu.push(computerOptions)
                    if (idsArr.includes(winningArr[i][0]) || idsArr.includes(winningArr[i][1]) || idsArr.includes(winningArr[i][2])) {
                        newArrCpu2.push(winningArr[i])
                    }
                }

                if (newArrCpu2.length > 0) {
                    for (let b = 0; b < newArrCpu2.length; b++) {
                        let winnerPlayer2 = () => {
                            return newArrCpu2[b].every((value) => !idsArr.includes(value))
                        }
                        let winnerPlayer2Result = winnerPlayer2();
                        if (winnerPlayer2Result) {
                            correctOption = newArrCpu2[b];
                            index = newArrCpu2.indexOf(correctOption)
                            if (newArrCpu2.includes(correctOption)) {
                                newArrCpu2.splice(index, 1);
                            }
                        }
                    }
                }


                if (newArrCpu2.length > 0) {
                    cpuWinning = true;
                } else {
                    cpuWinning = false;
                }



                if (playerWinning === false && cpuWinning === false) {
                    if (playerOptions.length === 1) {

                        newArrPlayerFor1.push(playerOptions)
                        if (idsArr.includes(winningArr[i][0]) || idsArr.includes(winningArr[i][1]) || idsArr.includes(winningArr[i][2])) {
                            newArrPlayer2For1.push(winningArr[i])
                        }

                        playerForWinning = true;
                    }
                } else { playerForWinning = false }


                if (playerWinning === false && cpuWinning === false) {
                    if (computerOptions.length === 1) {

                        newArrCpuFor1.push(computerOptions)
                        if (idsArr.includes(winningArr[i][0]) || idsArr.includes(winningArr[i][1]) || idsArr.includes(winningArr[i][2])) {
                            newArrCpu2For1.push(winningArr[i])
                        }

                        cpuForWinning = true;
                    }
                } else { cpuForWinning = false }
            }
            // console.log(playerWinning)
            // console.log(cpuWinning)
            // console.log(playerForWinning)
            // console.log(cpuForWinning)
            length = idsArr.length;

        }
    },

    checkResults: () => {
        console.log("checkresultsworked")
        let winnerPlayer1 = () => {
            return winningArr.find((combination) => combination.every((value) => player1Input.includes(value)))
        }


        let winnerPlayer2 = () => {
            return winningArr.find((combination) => combination.every((value) => player2Input.includes(value)))
        }


        let winnerPlayer1Result = winnerPlayer1();
        let winnerPlayer2Result = winnerPlayer2();


        // console.log(winnerPlayer1Result)
        // console.log(winnerPlayer2Result)

        if (idsArr.length === 0 && !winnerPlayer2Result && !winnerPlayer1Result) {
            countTies = JSON.parse(localStorage.getItem("countTies")) + 1;
            localStorage.setItem("countTies", JSON.stringify(countTies));
            tiesResultPar.innerHTML = countTies;
            gameResultPar.style.display = 'none';
            winnersPar.innerHTML = `ROUND TIED`;
            winnersPar.style.color = '#A8BFC9'
            winnersPar.style.textAlign = 'center'
            winnersImg.style.display = 'none'
            gameResultDiv.style.display = 'flex';
            mainContentForRestartGame.style.display = 'none';

            if (innerWidth < 768) {
                gameResultMainContent.style.padding = '61px 47px 61px 48px'
                winnersPar.style.marginLeft = '60px'
                // winnersPar.style.marginRight = '59px'
            } else if (innerWidth >= 768 && innerWidth < 1440) {
                gameResultMainContent.style.padding = '67px 249px 66px 249px'
                winnersPar.style.marginLeft = '2px'
                winnersPar.style.marginRight = '1px'
                btnsDivForGameResult.style.marginRight = '16.5px'
                btnsDivForGameResult.style.marginLeft = '15.5px'
                mainContenDivtForGameResult.style.width = '270px'
                mainContenDivtForGameResult.style.height = '133px'
                whoTakesRoundDiv.style.marginBottom = '31px'
                closeWindowtBtn.style.marginTop = '-180px'
            } else if (innerWidth >= 1440) {
                gameResultMainContent.style.padding = '67px 584.5px 66px 585.5px'
                winnersPar.style.marginLeft = '2px'
                winnersPar.style.marginRight = '1px'
                btnsDivForGameResult.style.marginRight = '16.5px'
                btnsDivForGameResult.style.marginLeft = '15.5px'
                mainContenDivtForGameResult.style.width = '270px'
                mainContenDivtForGameResult.style.height = '133px'
                whoTakesRoundDiv.style.marginBottom = '31px'
                closeWindowtBtn.style.marginTop = '-180px'
            }
            return;
        } else if (gameType === "true") {

            if (winnerPlayer1Result) {
                countWinPlayer1 = JSON.parse(localStorage.getItem("countWinPlayerSide1")) + 1;
                localStorage.setItem("countWinPlayerSide1", JSON.stringify(countWinPlayer1));;
                playerSideResultPar1.innerHTML = countWinPlayer1;
                gameResultPar.innerHTML = `YOU WON!`;
                winnersPar.innerHTML = `TAKES THE ROUND`;

                if (player === "x") {
                    winnersImg.setAttribute('src', './assets/icon-x.svg');
                    winnersPar.style.color = '#31C3BD'
                } else if (player === "o") {
                    winnersImg.setAttribute('src', ' ./assets/icon-o.svg');
                    winnersPar.style.color = '#F2B137';
                }
                gameResultDiv.style.display = 'flex';
                mainContentForRestartGame.style.display = 'none';
                return;

            } else if (winnerPlayer2Result) {
                countWinPlayer2 = JSON.parse(localStorage.getItem("countWinPlayerSide2")) + 1;
                localStorage.setItem("countWinPlayerSide2", JSON.stringify(countWinPlayer2));
                playerSideResultPar2.innerHTML = countWinPlayer2;
                gameResultPar.innerHTML = `OH NO, YOU LOST…`;
                winnersPar.innerHTML = `TAKES THE ROUND`;

                if (player === "x") {
                    winnersImg.setAttribute('src', './assets/icon-o.svg');
                    winnersPar.style.color = '#F2B137';
                } else if (player === "o") {
                    winnersImg.setAttribute('src', './assets/icon-x.svg');
                    winnersPar.style.color = '#31C3BD'
                }

                gameResultDiv.style.display = 'flex';
                mainContentForRestartGame.style.display = 'none';
                return;
            }
        } else if (gameType === "false") {
            if (player1 === 'x') {
                if (winnerPlayer1Result) {
                    countWinPlayer1 = JSON.parse(localStorage.getItem("countWinPlayerSide1")) + 1;
                    localStorage.setItem("countWinPlayerSide1", JSON.stringify(countWinPlayer1));;
                    playerSideResultPar1.innerHTML = countWinPlayer1;
                    gameResultPar.innerHTML = `PLAYER 1 WINS!`;
                    winnersPar.innerHTML = `TAKES THE ROUND`;
                    winnersImg.setAttribute('src', './assets/icon-x.svg');
                    winnersPar.style.color = '#31C3BD'
                    gameResultDiv.style.display = 'flex';
                    mainContentForRestartGame.style.display = 'none';
                    return;

                } else if (winnerPlayer2Result) {
                    countWinPlayer2 = JSON.parse(localStorage.getItem("countWinPlayerSide2")) + 1;
                    localStorage.setItem("countWinPlayerSide2", JSON.stringify(countWinPlayer2));
                    playerSideResultPar2.innerHTML = countWinPlayer2;
                    gameResultPar.innerHTML = `PLAYER 2 WINS!`;
                    winnersPar.innerHTML = `TAKES THE ROUND`;
                    winnersImg.setAttribute('src', './assets/icon-o.svg');
                    winnersPar.style.color = '#F2B137';
                    gameResultDiv.style.display = 'flex';
                    mainContentForRestartGame.style.display = 'none';
                    return;
                }
            } else if (player1 === 'o') {
                if (winnerPlayer1Result) {
                    countWinPlayer1 = JSON.parse(localStorage.getItem("countWinPlayerSide1")) + 1;
                    localStorage.setItem("countWinPlayerSide1", JSON.stringify(countWinPlayer1));;
                    playerSideResultPar2.innerHTML = countWinPlayer1;
                    gameResultPar.innerHTML = `PLAYER 1 WINS!`;
                    winnersPar.innerHTML = `TAKES THE ROUND`;
                    winnersImg.setAttribute('src', './assets/icon-o.svg');
                    winnersPar.style.color = '#F2B137';
                    gameResultDiv.style.display = 'flex';
                    mainContentForRestartGame.style.display = 'none';
                    return;

                } else if (winnerPlayer2Result) {
                    countWinPlayer2 = JSON.parse(localStorage.getItem("countWinPlayerSide2")) + 1;
                    localStorage.setItem("countWinPlayerSide2", JSON.stringify(countWinPlayer2));
                    playerSideResultPar1.innerHTML = countWinPlayer2;
                    gameResultPar.innerHTML = `PLAYER 2 WINS!`;
                    winnersPar.innerHTML = `TAKES THE ROUND`;
                    winnersImg.setAttribute('src', './assets/icon-x.svg');
                    winnersPar.style.color = '#31C3BD'
                    gameResultDiv.style.display = 'flex';
                    mainContentForRestartGame.style.display = 'none';
                    return;
                }
            }
        }


    },

    restart: () => {
        gameResultDiv.style.display = 'flex';
        mainContentForRestartGame.style.display = 'flex';
        mainContentForGameResult.style.display = 'none';
    },

    quiteGame: () => {
        window.location.href = "index.html";
        localStorage.removeItem("countWinPlayerSide1");
        localStorage.removeItem("countWinPlayerSide2");
        localStorage.removeItem("countTies");
        localStorage.removeItem("playerSide");
        localStorage.removeItem("gameType");
    },

    nextRoundWhenXPlayer: () => {

        
        window.location.reload();
        if (player1 === 'x') {
            
            // return console.log("player1 =x");
            playerSideResultPar1.innerHTML = localStorage.getItem("countWinPlayerSide1");
            playerSideResultPar2.innerHTML = localStorage.getItem("countWinPlayerSide2");
            tiesResultPar.innerHTML = localStorage.getItem("countTies");
        } else if (player1 === 'o') {
            
            // return console.log("player1 = 0");
            playerSideResultPar1.innerHTML = localStorage.getItem("countWinPlayerSide2");
            playerSideResultPar2.innerHTML = localStorage.getItem("countWinPlayerSide1");
            tiesResultPar.innerHTML = localStorage.getItem("countTies");
        }


     

        console.log(player1)


    },

    cancelGame: () => {
        gameResultDiv.style.display = 'none';
        mainContentForRestartGame.style.display = 'none';
    },

    restartGame: () => {
        window.location.reload();
        localStorage.setItem("countWinPlayerSide1", "0");
        localStorage.setItem("countWinPlayerSide2", "0");
        localStorage.setItem("countTies", "0");
    },

    goHomePage: () => {
        window.location.href = "index.html";
        localStorage.removeItem("countWinPlayerSide1");
        localStorage.removeItem("countWinPlayerSide2");
        localStorage.removeItem("countTies");
        localStorage.removeItem("playerSide");
        localStorage.removeItem("gameType");
    }
}

labelsArr.forEach((label) => {
    if (innerWidth >= 1440) {


        label.addEventListener('mouseover', (event) => {

            let labelId = event.target.id;

            if (idsArr.includes(labelId)) {

                if (player === "o") {
                    label.style.backgroundImage = 'url(./assets/icon-o-outline.svg)'
                    label.style.backgroundRepeat = 'no-repeat'
                    label.style.backgroundPosition = 'center'
                } else if (player === "x") {
                    label.style.backgroundImage = 'url(./assets/icon-x-outline.svg)'
                    label.style.backgroundRepeat = 'no-repeat'
                    label.style.backgroundPosition = 'center'
                }
            }
        })

        label.addEventListener('mouseout', () => {

            label.style.backgroundImage = 'none'
        })


    }

})






iconRestartDiv.addEventListener('click', () => {
    functions.restart();
});


quiteBtn.addEventListener('click', () => {
    functions.quiteGame();
});

nextRoundBtn.addEventListener('click', () => {
    functions.nextRoundWhenXPlayer();
});


cancelBtn.addEventListener('click', () => {
    functions.cancelGame();
});


restartBtn.addEventListener('click', () => {
    functions.restartGame();
});

logoImg.addEventListener('click', () => {
    functions.goHomePage();
});

closeWindowtBtn.addEventListener('click', () => {
    functions.cancelGame();
});










if (gameType === "false") {
    if (player === "x") {
        playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
        player1 = 'x';
        player2 = 'o';
        playerSide = "x";
        playerSidePar.innerHTML = "X (P1)";
        cpuSidePar.innerHTML = "O (P2)";
        playerSideResultPar1.innerHTML = localStorage.getItem("countWinPlayerSide1");
        playerSideResultPar2.innerHTML = localStorage.getItem("countWinPlayerSide2");
        tiesResultPar.innerHTML = localStorage.getItem("countTies");


        inputsArr.forEach(input => {
            input.addEventListener('click', () => {
                if (player === "x") {
                    let playerInput = inputsImgsArr.filter(inputImg => inputImg.id == input.id && idsArr.includes(input.id))[0];
                    playerInput.src = "./assets/icon-x.svg"
                    playerSideImg.setAttribute('src', './assets/icon-o(third).svg')
                    playerSide = 'o';
                    player = 'o'
                    player1Input.push(playerInput.id);
                    index = idsArr.indexOf(playerInput.id);
                    if (idsArr.includes(playerInput.id)) {
                        idsArr.splice(index, 1);
                    }
                    setTimeout(() => {
                        functions.checkResults();
                    }, 250)
                } else if (player === "o") {
                    let playerInput = inputsImgsArr.filter(inputImg => inputImg.id == input.id && idsArr.includes(input.id))[0];
                    playerInput.src = "./assets/icon-o.svg"
                    playerSideImg.setAttribute('src', './assets/icon-x(second).svg')
                    playerSide = 'x';
                    player = 'x';
                    player2Input.push(playerInput.id);
                    index = idsArr.indexOf(playerInput.id);
                    if (idsArr.includes(playerInput.id)) {
                        idsArr.splice(index, 1);
                    }
                    setTimeout(() => {
                        functions.checkResults();
                    }, 250)
                }
            })
        })
    } else if (player === "o") {
        playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
        player1 = 'o';
        player2 = 'x';
        playerSide = "o";
        playerSidePar.innerHTML = "X (P2)";
        cpuSidePar.innerHTML = "O (P1)";
        playerSideResultPar1.innerHTML = localStorage.getItem("countWinPlayerSide2");
        playerSideResultPar2.innerHTML = localStorage.getItem("countWinPlayerSide1");
        tiesResultPar.innerHTML = localStorage.getItem("countTies");

        inputsArr.forEach(input => {
            input.addEventListener('click', () => {
                if (playerSide === "o") {
                    let playerInput = inputsImgsArr.filter(inputImg => inputImg.id == input.id && idsArr.includes(input.id))[0];
                    playerInput.src = "./assets/icon-o.svg"
                    playerSideImg.setAttribute('src', './assets/icon-x(second).svg')
                    playerSide = 'x';
                    player = 'x'
                    player1Input.push(playerInput.id);
                    index = idsArr.indexOf(playerInput.id);
                    if (idsArr.includes(playerInput.id)) {
                        idsArr.splice(index, 1);
                    }
                    setTimeout(() => {
                        functions.checkResults();
                    }, 250)
                } else if (playerSide === "x") {
                    let playerInput = inputsImgsArr.filter(inputImg => inputImg.id == input.id && idsArr.includes(input.id))[0];
                    playerInput.src = "./assets/icon-x.svg"
                    playerSideImg.setAttribute('src', './assets/icon-o(third).svg')
                    playerSide = 'o';
                    player = 'o';
                    player2Input.push(playerInput.id);
                    index = idsArr.indexOf(playerInput.id);
                    if (idsArr.includes(playerInput.id)) {
                        idsArr.splice(index, 1);
                    }
                    setTimeout(() => {
                        functions.checkResults();
                    }, 250)
                }
            })
        })
    }

} else if (gameType === "true") {
    if (player === "x") {
        playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
        playerSide = 'x';
        cpuSide = 'o';
        playerSidePar.innerHTML = "X (YOU)";
        cpuSidePar.innerHTML = "O (CPU)";
        playerSideResultPar1.innerHTML = localStorage.getItem("countWinPlayerSide1");
        playerSideResultPar2.innerHTML = localStorage.getItem("countWinPlayerSide2");
        tiesResultPar.innerHTML = localStorage.getItem("countTies");

        inputsArr.forEach(input => {
            input.addEventListener('click', () => {
                player1InputClicked = inputsImgsArr.filter(inputImg => inputImg.id == input.id && idsArr.includes(input.id))[0];
                player1Input.push(player1InputClicked.id);
                filledInputs.push(player1InputClicked.id);
                index = idsArr.indexOf(player1InputClicked.id);
                if (idsArr.includes(player1InputClicked.id)) {
                    idsArr.splice(index, 1);
                }
                player1InputClicked.src = "./assets/icon-x.svg"
                playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
                functions.algorithmFunction(filledInputs);
                setTimeout(() => {
                    functions.checkResults();
                }, 250)
                if (cpuWinning) {
                    for (let i = 0; i < newArrCpu2.length; i++) {
                        for (let j = 0; j < newArrCpu2[i].length; j++) {
                            if (idsArr.includes(newArrCpu2[i][0]) || idsArr.includes(newArrCpu2[i][1]) || idsArr.includes(newArrCpu2[i][2])) {
                                correctOption = newArrCpu[i];
                                winningOption = newArrCpu2[i];
                                if (winningOption[j] !== correctOption[0] && winningOption[j] !== correctOption[1]) {
                                    setTimeout(() => {
                                        clickOption = winningOption[j];
                                        cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === clickOption && idsArr.includes(clickOption))[0];
                                        cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                        player2Input.push(clickOption);
                                        filledInputs.push(clickOption);

                                        index = idsArr.indexOf(clickOption);
                                        if (idsArr.includes(clickOption)) {
                                            idsArr.splice(index, 1);
                                        }
                                        playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                        // functions.algorithmFunction(filledInputs);

                                        // setTimeout(() => {
                                        //     functions.checkResults();
                                        // }, 250)

                                    }, 250)


                                }
                            }
                        }
                    }


                    setTimeout(() => {
                        functions.algorithmFunction(filledInputs);

                        setTimeout(() => {
                            functions.checkResults();
                        }, 250)
                    }, 250)

                } else if (playerWinning) {
                    if (!cpuWinning) {
                        if (newArrPlayer2.length === 1) {
                            for (let i = 0; i < 3; i++) {
                                if (newArrPlayer2[0][i] !== newArrPlayer[0][0] && newArrPlayer2[0][i] !== newArrPlayer[0][1]) {
                                    if (idsArr.includes(newArrPlayer2[0][i])) {
                                        clickOption = newArrPlayer2[0][i];
                                    }
                                }
                                setTimeout(() => {
                                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption && idsArr.includes(clickOption))[0];
                                    cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                    player2Input.push(cpuInputClicked.id);
                                    filledInputs.push(cpuInputClicked.id);

                                    index = idsArr.indexOf(cpuInputClicked.id);
                                    if (idsArr.includes(cpuInputClicked.id)) {
                                        idsArr.splice(index, 1);
                                    }
                                    for (let a = 0; a < newArrPlayer2.length; a++) {

                                        if (!idsArr.includes(newArrPlayer2[a][0]) && !idsArr.includes(newArrPlayer2[a][1]) && !idsArr.includes(newArrPlayer2[a][2])) {
                                            index = newArrPlayer2.indexOf(newArrPlayer2[a]);
                                            if (newArrPlayer2.includes(newArrPlayer2[a])) {
                                                newArrPlayer2.splice(index, 1);
                                            }
                                        }
                                    }
                                    playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                    // functions.algorithmFunction(filledInputs);


                                }, 250)

                            }
                        } else if (newArrPlayer2.length >= 2) {
                            for (let i = 0; i < newArrPlayer2.length; i++) {
                                correctChoise = newArrPlayer2[i].filter((value) => idsArr.includes(value))
                                if (correctChoise.length > 0) {
                                    correctArr.push(correctChoise);
                                }
                            }

                            if (correctArr.length > 0) {
                                index = Math.floor(Math.random() * correctArr.length);
                                correctOption = correctArr[index];
                                setTimeout(() => {
                                    clickOption = correctOption;
                                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                    cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                    player2Input.push(clickOption);
                                    filledInputs.push(clickOption);
                                    index = idsArr.indexOf(cpuInputClicked.id);
                                    if (idsArr.includes(clickOption)) {
                                        idsArr.splice(index, 1);
                                    }
                                    playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                    // functions.algorithmFunction(filledInputs);


                                }, 250)
                            }

                        }
                    }
                    functions.algorithmFunction(filledInputs);

                } else if (cpuForWinning || playerForWinning) {

                    if (length <= 2) {
                        index = Math.floor(Math.random() * idsArr.length);
                        correctOption = idsArr[index];
                        setTimeout(() => {
                            clickOption = correctOption;
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                            player2Input.push(clickOption);
                            filledInputs.push(clickOption);
                            index = idsArr.indexOf(clickOption);
                            if (idsArr.includes(clickOption)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                            // functions.algorithmFunction(filledInputs);


                        }, 250)

                    } else if (length > 2 && length < 6) {
                        for (let i = 0; i < newArrCpu2For1.length; i++) {
                            if ((idsArr.includes(newArrCpu2For1[i][0]) && idsArr.includes(newArrCpu2For1[i][1])) || (idsArr.includes(newArrCpu2For1[i][0]) && idsArr.includes(newArrCpu2For1[i][2])) || (idsArr.includes(newArrCpu2For1[i][2]) && idsArr.includes(newArrCpu2For1[i][1]))) {
                                for (let j = 0; j < newArrCpu2For1[i].length; j++) {
                                    if (newArrCpu2For1[i][j] !== newArrCpuFor1[0][0] && idsArr.includes(newArrCpu2For1[i][j])) {
                                        cpuWinningArrFor1.push(newArrCpu2For1[i][j])

                                    }

                                }
                                if (cpuWinningArrFor1.length > 0) {
                                    for (let i = 0; i < cpuWinningArrFor1.length; i++) {
                                        if (!idsArr.includes(cpuWinningArrFor1[i])) {
                                            index = cpuWinningArrFor1.indexOf(cpuWinningArrFor1[i])
                                            correctOption = cpuWinningArrFor1[index]
                                            if (cpuWinningArrFor1.includes(correctOption)) {
                                                cpuWinningArrFor1.slice(index, 1)
                                            }
                                        }

                                    }
                                    index = Math.floor(Math.random() * cpuWinningArrFor1.length);
                                    correctOption = cpuWinningArrFor1[index];
                                    setTimeout(() => {
                                        clickOption = correctOption;
                                        cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                        cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                        player2Input.push(clickOption);
                                        filledInputs.push(clickOption);
                                        index = idsArr.indexOf(clickOption);
                                        if (idsArr.includes(clickOption)) {
                                            idsArr.splice(index, 1);
                                        }
                                        playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                        // functions.algorithmFunction(filledInputs);


                                    }, 250)

                                }
                            }
                        }
                    } else if (length === 6) {
                        if (player1Input[0] === "3" && player2Input[0] === "5" && player1Input[1] === "4") {
                            if (idsArr.includes("1")) {
                                setTimeout(() => {
                                    clickOption = "1";
                                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                    cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                    player2Input.push(clickOption);
                                    filledInputs.push(clickOption);
                                    index = idsArr.indexOf(clickOption);
                                    if (idsArr.includes(clickOption)) {
                                        idsArr.splice(index, 1);
                                    }
                                    playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                    // functions.algorithmFunction(filledInputs);


                                }, 250)
                            }

                        } else if (player1Input[0] === "1" && player2Input[0] === "5" && player1Input[1] === "6") {
                            if (idsArr.includes("3")) {
                                setTimeout(() => {
                                    clickOption = "3";
                                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                    cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                    player2Input.push(clickOption);
                                    filledInputs.push(clickOption);
                                    index = idsArr.indexOf(clickOption);
                                    if (idsArr.includes(clickOption)) {
                                        idsArr.splice(index, 1);
                                    }
                                    playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                    // functions.algorithmFunction(filledInputs);


                                }, 250)
                            }
                        } else if (player1Input[0] === "7" && player2Input[0] === "5" && player1Input[1] === "6") {
                            if (idsArr.includes("9")) {
                                setTimeout(() => {
                                    clickOption = "9";
                                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                    cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                    player2Input.push(clickOption);
                                    filledInputs.push(clickOption);
                                    index = idsArr.indexOf(clickOption);
                                    if (idsArr.includes(clickOption)) {
                                        idsArr.splice(index, 1);
                                    }
                                    playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                    // functions.algorithmFunction(filledInputs);


                                }, 250)
                            }
                        } else if (player1Input[0] === "9" && player2Input[0] === "5" && player1Input[1] === "4") {
                            if (idsArr.includes("7")) {
                                setTimeout(() => {
                                    clickOption = "7";
                                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                    cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                    player2Input.push(clickOption);
                                    filledInputs.push(clickOption);
                                    index = idsArr.indexOf(clickOption);
                                    if (idsArr.includes(clickOption)) {
                                        idsArr.splice(index, 1);
                                    }
                                    playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                    // functions.algorithmFunction(filledInputs);


                                }, 250)
                            }
                        } else if (player1Input[0] === "1" && player2Input[0] === "5" && player1Input[1] === "9") {
                            if (idsArr.includes("2") && idsArr.includes("4") && idsArr.includes("6") && idsArr.includes("8")) {
                                setTimeout(() => {
                                    possibleOptions = ["2", "4", "6", "8"]
                                    randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                    clickOption = possibleOptions[randomIndex];
                                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                    cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                    player2Input.push(clickOption);
                                    filledInputs.push(clickOption);
                                    index = idsArr.indexOf(clickOption);
                                    if (idsArr.includes(clickOption)) {
                                        idsArr.splice(index, 1);
                                    }
                                    playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                    // functions.algorithmFunction(filledInputs);


                                }, 250)
                            }
                        } else if (player1Input[0] === "3" && player2Input[0] === "5" && player1Input[1] === "7") {
                            if (idsArr.includes("2") && idsArr.includes("4") && idsArr.includes("6") && idsArr.includes("8")) {
                                setTimeout(() => {
                                    possibleOptions = ["2", "4", "6", "8"]
                                    randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                    clickOption = possibleOptions[randomIndex];
                                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                    cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                    player2Input.push(clickOption);
                                    filledInputs.push(clickOption);
                                    index = idsArr.indexOf(clickOption);
                                    if (idsArr.includes(clickOption)) {
                                        idsArr.splice(index, 1);
                                    }
                                    playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                    // functions.algorithmFunction(filledInputs);


                                }, 250)
                            }
                        } else if (player1Input[0] === "7" && player2Input[0] === "5" && player1Input[1] === "3") {
                            if (idsArr.includes("2") && idsArr.includes("4") && idsArr.includes("6") && idsArr.includes("8")) {
                                setTimeout(() => {
                                    possibleOptions = ["2", "4", "6", "8"]
                                    randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                    clickOption = possibleOptions[randomIndex];
                                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                    cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                    player2Input.push(clickOption);
                                    filledInputs.push(clickOption);
                                    index = idsArr.indexOf(clickOption);
                                    if (idsArr.includes(clickOption)) {
                                        idsArr.splice(index, 1);
                                    }
                                    playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                    // functions.algorithmFunction(filledInputs);


                                }, 250)
                            }
                        } else if (player1Input[0] === "9" && player2Input[0] === "5" && player1Input[1] === "1") {
                            if (idsArr.includes("2") && idsArr.includes("4") && idsArr.includes("6") && idsArr.includes("8")) {
                                setTimeout(() => {
                                    possibleOptions = ["2", "4", "6", "8"]
                                    randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                    clickOption = possibleOptions[randomIndex];
                                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                    cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                    player2Input.push(clickOption);
                                    filledInputs.push(clickOption);
                                    index = idsArr.indexOf(clickOption);
                                    if (idsArr.includes(clickOption)) {
                                        idsArr.splice(index, 1);
                                    }
                                    playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                    // functions.algorithmFunction(filledInputs);


                                }, 250)
                            }
                        } else if (((player1Input[0] === "1" && player1Input[1] === "5") || (player1Input[0] === "5" && player1Input[1] === "1")) && player2Input[0] === "9") {
                            if (idsArr.includes("7") && idsArr.includes("3")) {
                                setTimeout(() => {
                                    possibleOptions = ["7", "3"]
                                    randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                    clickOption = possibleOptions[randomIndex];
                                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                    cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                    player2Input.push(clickOption);
                                    filledInputs.push(clickOption);
                                    index = idsArr.indexOf(clickOption);
                                    if (idsArr.includes(clickOption)) {
                                        idsArr.splice(index, 1);
                                    }
                                    playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                    // functions.algorithmFunction(filledInputs);


                                }, 250)
                            }
                        } else if (((player1Input[0] === "9" && player1Input[1] === "5") || (player1Input[0] === "5" && player1Input[1] === "9")) && player2Input[0] === "1") {
                            if (idsArr.includes("7") && idsArr.includes("3")) {
                                setTimeout(() => {
                                    possibleOptions = ["7", "3"]
                                    randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                    clickOption = possibleOptions[randomIndex];
                                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                    cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                    player2Input.push(clickOption);
                                    filledInputs.push(clickOption);
                                    index = idsArr.indexOf(clickOption);
                                    if (idsArr.includes(clickOption)) {
                                        idsArr.splice(index, 1);
                                    }
                                    playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                    // functions.algorithmFunction(filledInputs);


                                }, 250)
                            }
                        } else if (((player1Input[0] === "3" && player1Input[1] === "5") || (player1Input[0] === "5" && player1Input[1] === "3")) && player2Input[0] === "7") {
                            if (idsArr.includes("1") && idsArr.includes("9")) {
                                setTimeout(() => {
                                    possibleOptions = ["1", "9"]
                                    randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                    clickOption = possibleOptions[randomIndex];
                                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                    cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                    player2Input.push(clickOption);
                                    filledInputs.push(clickOption);
                                    index = idsArr.indexOf(clickOption);
                                    if (idsArr.includes(clickOption)) {
                                        idsArr.splice(index, 1);
                                    }
                                    playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                    // functions.algorithmFunction(filledInputs);


                                }, 250)
                            }
                        } else if (((player1Input[0] === "7" && player1Input[1] === "5") || (player1Input[0] === "5" && player1Input[1] === "7")) && player2Input[0] === "3") {
                            if (idsArr.includes("1") && idsArr.includes("9")) {
                                setTimeout(() => {
                                    possibleOptions = ["1", "9"]
                                    randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                    clickOption = possibleOptions[randomIndex];
                                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                    cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                    player2Input.push(clickOption);
                                    filledInputs.push(clickOption);
                                    index = idsArr.indexOf(clickOption);
                                    if (idsArr.includes(clickOption)) {
                                        idsArr.splice(index, 1);
                                    }
                                    playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                    // functions.algorithmFunction(filledInputs);


                                }, 250)
                            }
                        } else {
                            for (let i = 0; i < newArrCpu2For1.length; i++) {
                                if ((idsArr.includes(newArrCpu2For1[i][0]) && idsArr.includes(newArrCpu2For1[i][1])) || (idsArr.includes(newArrCpu2For1[i][0]) && idsArr.includes(newArrCpu2For1[i][2])) || (idsArr.includes(newArrCpu2For1[i][2]) && idsArr.includes(newArrCpu2For1[i][1]))) {
                                    for (let j = 0; j < newArrCpu2For1[i].length; j++) {
                                        if (newArrCpu2For1[i][j] !== newArrCpuFor1[0][0] && idsArr.includes(newArrCpu2For1[i][j])) {
                                            cpuWinningArrFor1.push(newArrCpu2For1[i][j])

                                        }

                                    }
                                    if (cpuWinningArrFor1.length > 0) {
                                        for (let i = 0; i < cpuWinningArrFor1.length; i++) {
                                            if (!idsArr.includes(cpuWinningArrFor1[i])) {
                                                index = cpuWinningArrFor1.indexOf(cpuWinningArrFor1[i])
                                                correctOption = cpuWinningArrFor1[index]
                                                if (cpuWinningArrFor1.includes(correctOption)) {
                                                    cpuWinningArrFor1.slice(index, 1)
                                                }
                                            }

                                        }
                                        index = Math.floor(Math.random() * cpuWinningArrFor1.length);
                                        correctOption = cpuWinningArrFor1[index];
                                        setTimeout(() => {
                                            clickOption = correctOption;
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                            player2Input.push(clickOption);
                                            filledInputs.push(clickOption);
                                            index = idsArr.indexOf(clickOption);
                                            if (idsArr.includes(clickOption)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                            // functions.algorithmFunction(filledInputs);


                                        }, 250)

                                    }
                                }
                            }
                        }
                    }


                    functions.algorithmFunction(filledInputs);

                }
            })
        })

    } else if (player === "o") {
        playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
        playerSide = 'o';
        cpuSide = 'x';
        playerSidePar.innerHTML = "O (YOU)";
        cpuSidePar.innerHTML = "X (CPU)";
        playerSideResultPar1.innerHTML = localStorage.getItem("countWinPlayerSide1");
        playerSideResultPar2.innerHTML = localStorage.getItem("countWinPlayerSide2");
        tiesResultPar.innerHTML = localStorage.getItem("countTies");
        if (idsArr.length === 9) {
            functions.algorithmFunction(filledInputs);
        }

        inputsArr.forEach(input => {
            input.addEventListener('click', () => {
                player1InputClicked = inputsImgsArr.filter(inputImg => inputImg.id == input.id && idsArr.includes(input.id))[0];
                player1Input.push(player1InputClicked.id);
                filledInputs.push(player1InputClicked.id);
                index = idsArr.indexOf(player1InputClicked.id);
                if (idsArr.includes(player1InputClicked.id)) {
                    idsArr.splice(index, 1);
                }
                player1InputClicked.src = "./assets/icon-o.svg"
                playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                functions.algorithmFunction(filledInputs);
                setTimeout(() => {
                    functions.checkResults();
                }, 250)

                if (cpuWinning) {
                    console.log("cpuWinning Checked")
                    for (let i = 0; i < newArrCpu2.length; i++) {
                        for (let j = 0; j < newArrCpu2[i].length; j++) {
                            if (idsArr.includes(newArrCpu2[i][0]) || idsArr.includes(newArrCpu2[i][1]) || idsArr.includes(newArrCpu2[i][2])) {
                                correctOption = newArrCpu[i];
                                winningOption = newArrCpu2[i];
                                if (winningOption[j] !== correctOption[0] && winningOption[j] !== correctOption[1]) {
                                    setTimeout(() => {
                                        clickOption = winningOption[j];
                                        cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === clickOption && idsArr.includes(clickOption))[0];
                                        cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                        player2Input.push(clickOption);
                                        filledInputs.push(clickOption);

                                        index = idsArr.indexOf(clickOption);
                                        if (idsArr.includes(clickOption)) {
                                            idsArr.splice(index, 1);
                                        }
                                        playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
                                        // functions.algorithmFunction(filledInputs);

                                        // setTimeout(() => {
                                        //     functions.checkResults();
                                        // }, 250)

                                        console.log("check cpuwinning")

                                    }, 250)


                                }
                            }
                        }
                    }

                    setTimeout(() => {
                        functions.algorithmFunction(filledInputs);

                        setTimeout(() => {
                            functions.checkResults();
                        }, 250)
                    }, 250)

                } else if (playerWinning) {
                    if (!cpuWinning) {
                        console.log("check playerwinning")
                        if (newArrPlayer2.length === 1) {
                            for (let i = 0; i < 3; i++) {
                                if (newArrPlayer2[0][i] !== newArrPlayer[0][0] && newArrPlayer2[0][i] !== newArrPlayer[0][1]) {
                                    if (idsArr.includes(newArrPlayer2[0][i])) {
                                        clickOption = newArrPlayer2[0][i];
                                    }
                                }
                                setTimeout(() => {
                                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption && idsArr.includes(clickOption))[0];
                                    cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                    player2Input.push(cpuInputClicked.id);
                                    filledInputs.push(cpuInputClicked.id);

                                    index = idsArr.indexOf(cpuInputClicked.id);
                                    if (idsArr.includes(cpuInputClicked.id)) {
                                        idsArr.splice(index, 1);
                                    }
                                    for (let a = 0; a < newArrPlayer2.length; a++) {

                                        if (!idsArr.includes(newArrPlayer2[a][0]) && !idsArr.includes(newArrPlayer2[a][1]) && !idsArr.includes(newArrPlayer2[a][2])) {
                                            index = newArrPlayer2.indexOf(newArrPlayer2[a]);
                                            if (newArrPlayer2.includes(newArrPlayer2[a])) {
                                                newArrPlayer2.splice(index, 1);
                                            }
                                        }
                                    }
                                    playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
                                    // functions.algorithmFunction(filledInputs);

                                    // setTimeout(() => {
                                    //     functions.checkResults();
                                    // }, 250)
                                }, 250)

                            }
                        } else if (newArrPlayer2.length >= 2) {
                            for (let i = 0; i < newArrPlayer2.length; i++) {
                                correctChoise = newArrPlayer2[i].filter((value) => idsArr.includes(value))
                                if (correctChoise.length > 0) {
                                    correctArr.push(correctChoise);
                                }
                            }

                            if (correctArr.length > 0) {
                                index = Math.floor(Math.random() * correctArr.length);
                                correctOption = correctArr[index];
                                setTimeout(() => {
                                    clickOption = correctOption;
                                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                    cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                    player2Input.push(clickOption);
                                    filledInputs.push(clickOption);
                                    index = idsArr.indexOf(cpuInputClicked.id);
                                    if (idsArr.includes(clickOption)) {
                                        idsArr.splice(index, 1);
                                    }
                                    playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
                                    // functions.algorithmFunction(filledInputs);
                                    // setTimeout(() => {
                                    //     functions.checkResults();
                                    // }, 250)

                                }, 250)
                            }

                        }
                    }


                    setTimeout(() => {
                        functions.algorithmFunction(filledInputs);

                        setTimeout(() => {
                            functions.checkResults();
                        }, 250)
                    }, 250)

                } else if (cpuForWinning || playerForWinning) {

                    if (length <= 2) {
                        index = Math.floor(Math.random() * idsArr.length);
                        correctOption = idsArr[index];
                        setTimeout(() => {
                            clickOption = correctOption;
                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                            cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                            player2Input.push(clickOption);
                            filledInputs.push(clickOption);
                            index = idsArr.indexOf(clickOption);
                            if (idsArr.includes(clickOption)) {
                                idsArr.splice(index, 1);
                            }
                            playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                            // functions.algorithmFunction(filledInputs);

                            // setTimeout(() => {
                            //     functions.checkResults();
                            // }, 250)
                        }, 250)

                    } else if (length > 2) {
                        for (let i = 0; i < newArrCpu2For1.length; i++) {
                            if ((idsArr.includes(newArrCpu2For1[i][0]) && idsArr.includes(newArrCpu2For1[i][1])) || (idsArr.includes(newArrCpu2For1[i][0]) && idsArr.includes(newArrCpu2For1[i][2])) || (idsArr.includes(newArrCpu2For1[i][2]) && idsArr.includes(newArrCpu2For1[i][1]))) {
                                for (let j = 0; j < newArrCpu2For1[i].length; j++) {
                                    if (newArrCpu2For1[i][j] !== newArrCpuFor1[0][0] && idsArr.includes(newArrCpu2For1[i][j])) {
                                        cpuWinningArrFor1.push(newArrCpu2For1[i][j])

                                    }

                                }
                                if (cpuWinningArrFor1.length > 0) {
                                    for (let i = 0; i < cpuWinningArrFor1.length; i++) {
                                        if (!idsArr.includes(cpuWinningArrFor1[i])) {
                                            index = cpuWinningArrFor1.indexOf(cpuWinningArrFor1[i])
                                            correctOption = cpuWinningArrFor1[index]
                                            if (cpuWinningArrFor1.includes(correctOption)) {
                                                cpuWinningArrFor1.slice(index, 1)
                                            }
                                        }

                                    }
                                }
                            }
                        }

                        let newArr = ["1", "3", "7", "9"];
                        let winningChoise = newArr.filter((value) => cpuWinningArrFor1.includes(value));
                        console.log(winningChoise)
                        console.log(winningChoise.length)

                        if (winningChoise.length === 0) {
                            if (cpuWinningArrFor1.length > 0) {
                                index = Math.floor(Math.random() * cpuWinningArrFor1.length);
                                correctOption = cpuWinningArrFor1[index];
                                console.log(correctOption)
                                setTimeout(() => {
                                    clickOption = correctOption;
                                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                    cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                    player2Input.push(clickOption);
                                    filledInputs.push(clickOption);
                                    index = idsArr.indexOf(clickOption);
                                    if (idsArr.includes(clickOption)) {
                                        idsArr.splice(index, 1);
                                    }
                                    playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
                                    // functions.algorithmFunction(filledInputs);
                                    // setTimeout(() => {
                                    //     functions.checkResults();
                                    // }, 250)
                                    console.log("length > 2")
                                }, 250)
                            } else if (cpuWinningArrFor1.length === 0) {
                                index = Math.floor(Math.random() * idsArr.length);
                                correctOption = idsArr[index];
                                setTimeout(() => {
                                    clickOption = correctOption;
                                    cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                    cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                    player2Input.push(clickOption);
                                    filledInputs.push(clickOption);
                                    index = idsArr.indexOf(clickOption);
                                    if (idsArr.includes(clickOption)) {
                                        idsArr.splice(index, 1);
                                    }
                                    playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                    // functions.algorithmFunction(filledInputs);

                                    // setTimeout(() => {
                                    //     functions.checkResults();
                                    // }, 250)
                                }, 250)

                            }

                        } else if (winningChoise.length > 0) {
                            console.log("checked")
                            if (player2Input[0] === "1") {
                                if (winningChoise.includes("7") && winningChoise.includes("9")) {

                                    if (player2Input[1] === "3" && ((player1Input[0] === "4" && player1Input[1] === "2") || (player1Input[0] === "2" && player1Input[1] === "4"))) {
                                        setTimeout(() => {
                                            possibleOptions = ["5", "9"];
                                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250);
                                    } else if (player2Input[1] === "3" && ((player1Input[0] === "6" && player1Input[1] === "2") || (player1Input[0] === "2" && player1Input[1] === "6"))) {
                                        setTimeout(() => {
                                            possibleOptions = ["5", "7"];
                                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250);
                                    } else if (player2Input[1] === "8" && ((player1Input[0] === "6" && player1Input[1] === "2") || (player1Input[0] === "2" && player1Input[1] === "6"))) {
                                        setTimeout(() => {
                                            possibleOptions = ["7", "9"];
                                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250);
                                    } else if (player2Input[1] === "8" && ((player1Input[0] === "4" && player1Input[1] === "2") || (player1Input[0] === "2" && player1Input[1] === "4"))) {
                                        setTimeout(() => {
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "9" && idsArr.includes("9"))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250);
                                    } else {
                                        setTimeout(() => {
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "7" && idsArr.includes("7"))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250);
                                    }


                                } else if(!winningChoise.includes("7") && !winningChoise.includes("9")) {
                                    
                                    if (player2Input[1] === "8") {
                                        setTimeout(() => {
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "3" && idsArr.includes("3"))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250)
                                    }

                                } else {
                                    if (cpuWinningArrFor1.length > 0) {
                                        index = Math.floor(Math.random() * cpuWinningArrFor1.length);
                                        correctOption = cpuWinningArrFor1[index];
                                        console.log(correctOption)
                                        setTimeout(() => {
                                            clickOption = correctOption;
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(clickOption);
                                            filledInputs.push(clickOption);
                                            index = idsArr.indexOf(clickOption);
                                            if (idsArr.includes(clickOption)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
                                            // functions.algorithmFunction(filledInputs);
                                            // setTimeout(() => {
                                            //     functions.checkResults();
                                            // }, 250)
                                            console.log("length > 2")
                                        }, 250)
                                    } else if (cpuWinningArrFor1.length === 0) {
                                        index = Math.floor(Math.random() * idsArr.length);
                                        correctOption = idsArr[index];
                                        setTimeout(() => {
                                            clickOption = correctOption;
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                            player2Input.push(clickOption);
                                            filledInputs.push(clickOption);
                                            index = idsArr.indexOf(clickOption);
                                            if (idsArr.includes(clickOption)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                        }, 250)

                                    }
                                }

                            } else if (player2Input[0] === "3") {
                                console.log("checked")
                                if (winningChoise.includes("7") && winningChoise.includes("9")) {

                                    if (player2Input[1] === "1" && ((player1Input[0] === "6" && player1Input[1] === "2") || (player1Input[0] === "2" && player1Input[1] === "6"))) {
                                        setTimeout(() => {
                                            possibleOptions = ["5", "7"];
                                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250);
                                    } else if (player2Input[1] === "1" && ((player1Input[0] === "4" && player1Input[1] === "2") || (player1Input[0] === "2" && player1Input[1] === "4"))) {
                                        setTimeout(() => {
                                            possibleOptions = ["5", "9"];
                                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250);
                                    } else if (player2Input[1] === "8" && ((player1Input[0] === "2" && player1Input[1] === "6") || (player1Input[0] === "6" && player1Input[1] === "2"))) {
                                        setTimeout(() => {
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "7" && idsArr.includes("7"))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250)
                                    } else if (player2Input[1] === "8" && ((player1Input[0] === "4" && player1Input[1] === "2") || (player1Input[0] === "2" && player1Input[1] === "4"))) {
                                        setTimeout(() => {
                                            possibleOptions = ["7", "9"];
                                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250);
                                    } else {
                                        setTimeout(() => {
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "9" && idsArr.includes("9"))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250);
                                    }
                                } else {
                                    if (cpuWinningArrFor1.length > 0) {
                                        console.log("worked")
                                        index = Math.floor(Math.random() * cpuWinningArrFor1.length);
                                        correctOption = cpuWinningArrFor1[index];
                                        console.log(correctOption)
                                        setTimeout(() => {
                                            clickOption = correctOption;
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(clickOption);
                                            filledInputs.push(clickOption);
                                            index = idsArr.indexOf(clickOption);
                                            if (idsArr.includes(clickOption)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
                                            // functions.algorithmFunction(filledInputs);
                                            // setTimeout(() => {
                                            //     functions.checkResults();
                                            // }, 250)
                                            console.log("length > 2")
                                        }, 250)
                                    } else if (cpuWinningArrFor1.length === 0) {
                                        index = Math.floor(Math.random() * idsArr.length);
                                        correctOption = idsArr[index];
                                        setTimeout(() => {
                                            clickOption = correctOption;
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                            player2Input.push(clickOption);
                                            filledInputs.push(clickOption);
                                            index = idsArr.indexOf(clickOption);
                                            if (idsArr.includes(clickOption)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                            // functions.algorithmFunction(filledInputs);

                                            // setTimeout(() => {
                                            //     functions.checkResults();
                                            // }, 250)
                                        }, 250)

                                    }
                                }

                            } else if (player2Input[0] === "5") {

                                if (player2Input[1] === "1") {
                                    if (idsArr.includes("3") || idsArr.includes("7")) {
                                        if (idsArr.includes("2") && idsArr.includes("3") && idsArr.includes("4") && idsArr.includes("7")) {
                                            setTimeout(() => {
                                                possibleOptions = ["3", "7"];
                                                randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                                player2Input.push(cpuInputClicked.id);
                                                filledInputs.push(cpuInputClicked.id);
                                                index = idsArr.indexOf(cpuInputClicked.id);
                                                if (idsArr.includes(cpuInputClicked.id)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                            }, 250);
                                        } else if (idsArr.includes("4") && idsArr.includes("7") && !idsArr.includes("2") && idsArr.includes("3")) {
                                            setTimeout(() => {
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "7" && idsArr.includes("7"))[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                                player2Input.push(cpuInputClicked.id);
                                                filledInputs.push(cpuInputClicked.id);
                                                index = idsArr.indexOf(cpuInputClicked.id);
                                                if (idsArr.includes(cpuInputClicked.id)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                            }, 250);
                                        } else if (idsArr.includes("2") && idsArr.includes("3") && !idsArr.includes("4") && idsArr.includes("7")) {
                                            setTimeout(() => {
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "3" && idsArr.includes("3"))[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                                player2Input.push(cpuInputClicked.id);
                                                filledInputs.push(cpuInputClicked.id);
                                                index = idsArr.indexOf(cpuInputClicked.id);
                                                if (idsArr.includes(cpuInputClicked.id)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                            }, 250);
                                        }
                                    } else {
                                        if (cpuWinningArrFor1.length > 0) {
                                            console.log("worked")
                                            index = Math.floor(Math.random() * cpuWinningArrFor1.length);
                                            correctOption = cpuWinningArrFor1[index];
                                            console.log(correctOption)
                                            setTimeout(() => {
                                                clickOption = correctOption;
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                                player2Input.push(clickOption);
                                                filledInputs.push(clickOption);
                                                index = idsArr.indexOf(clickOption);
                                                if (idsArr.includes(clickOption)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
                                                // functions.algorithmFunction(filledInputs);
                                                // setTimeout(() => {
                                                //     functions.checkResults();
                                                // }, 250)
                                                console.log("length > 2")
                                            }, 250)
                                        } else if (cpuWinningArrFor1.length === 0) {
                                            index = Math.floor(Math.random() * idsArr.length);
                                            correctOption = idsArr[index];
                                            setTimeout(() => {
                                                clickOption = correctOption;
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                                player2Input.push(clickOption);
                                                filledInputs.push(clickOption);
                                                index = idsArr.indexOf(clickOption);
                                                if (idsArr.includes(clickOption)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                                // functions.algorithmFunction(filledInputs);

                                                // setTimeout(() => {
                                                //     functions.checkResults();
                                                // }, 250)
                                            }, 250)

                                        }
                                    }

                                } else if (player2Input[1] === "2") {
                                    if (length === 5) {
                                        setTimeout(() => {
                                            possibleOptions = ["1", "3"];
                                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250);
                                    } else if (length !== 5) {
                                        if (cpuWinningArrFor1.length > 0) {
                                            index = Math.floor(Math.random() * cpuWinningArrFor1.length);
                                            correctOption = cpuWinningArrFor1[index];
                                            console.log(correctOption)
                                            setTimeout(() => {
                                                clickOption = correctOption;
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                                player2Input.push(clickOption);
                                                filledInputs.push(clickOption);
                                                index = idsArr.indexOf(clickOption);
                                                if (idsArr.includes(clickOption)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
                                                // functions.algorithmFunction(filledInputs);
                                                // setTimeout(() => {
                                                //     functions.checkResults();
                                                // }, 250)
                                                // console.log("length > 2")
                                            }, 250)
                                        } else if (cpuWinningArrFor1.length === 0) {
                                            index = Math.floor(Math.random() * idsArr.length);
                                            correctOption = idsArr[index];
                                            setTimeout(() => {
                                                clickOption = correctOption;
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                                player2Input.push(clickOption);
                                                filledInputs.push(clickOption);
                                                index = idsArr.indexOf(clickOption);
                                                if (idsArr.includes(clickOption)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                                // functions.algorithmFunction(filledInputs);

                                                // setTimeout(() => {
                                                //     functions.checkResults();
                                                // }, 250)
                                            }, 250)

                                        }
                                    }

                                } else if (player2Input[1] === "3") {
                                    if (idsArr.includes("1") || idsArr.includes("9")) {
                                        if (idsArr.includes("1") && idsArr.includes("2") && idsArr.includes("6") && idsArr.includes("9")) {
                                            setTimeout(() => {
                                                possibleOptions = ["1", "9"];
                                                randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                                player2Input.push(cpuInputClicked.id);
                                                filledInputs.push(cpuInputClicked.id);
                                                index = idsArr.indexOf(cpuInputClicked.id);
                                                if (idsArr.includes(cpuInputClicked.id)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                            }, 250);
                                        } else if (idsArr.includes("1") && idsArr.includes("2") && !idsArr.includes("6") && idsArr.includes("9")) {
                                            setTimeout(() => {
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "1" && idsArr.includes("1"))[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                                player2Input.push(cpuInputClicked.id);
                                                filledInputs.push(cpuInputClicked.id);
                                                index = idsArr.indexOf(cpuInputClicked.id);
                                                if (idsArr.includes(cpuInputClicked.id)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                            }, 250);
                                        } else if (idsArr.includes("6") && idsArr.includes("9") && idsArr.includes("1") && !idsArr.includes("2")) {
                                            setTimeout(() => {
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "9" && idsArr.includes("9"))[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                                player2Input.push(cpuInputClicked.id);
                                                filledInputs.push(cpuInputClicked.id);
                                                index = idsArr.indexOf(cpuInputClicked.id);
                                                if (idsArr.includes(cpuInputClicked.id)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                            }, 250);
                                        }
                                    } else {
                                        if (cpuWinningArrFor1.length > 0) {
                                            console.log("worked")
                                            index = Math.floor(Math.random() * cpuWinningArrFor1.length);
                                            correctOption = cpuWinningArrFor1[index];
                                            console.log(correctOption)
                                            setTimeout(() => {
                                                clickOption = correctOption;
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                                player2Input.push(clickOption);
                                                filledInputs.push(clickOption);
                                                index = idsArr.indexOf(clickOption);
                                                if (idsArr.includes(clickOption)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
                                                console.log("length > 2")
                                            }, 250)
                                        } else if (cpuWinningArrFor1.length === 0) {
                                            index = Math.floor(Math.random() * idsArr.length);
                                            correctOption = idsArr[index];
                                            setTimeout(() => {
                                                clickOption = correctOption;
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                                player2Input.push(clickOption);
                                                filledInputs.push(clickOption);
                                                index = idsArr.indexOf(clickOption);
                                                if (idsArr.includes(clickOption)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                            }, 250)

                                        }
                                    }

                                } else if (player2Input[1] === "4") {
                                    let newArr = ["1", "7"];
                                    let winningChoise = newArr.filter((value) => idsArr.includes(value));
                                    if (winningChoise.length > 0) {
                                        index = Math.floor(Math.random() * winningChoise.length);
                                        correctOption = winningChoise[index];
                                        console.log(correctOption)
                                        setTimeout(() => {
                                            clickOption = correctOption;
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(clickOption);
                                            filledInputs.push(clickOption);
                                            index = idsArr.indexOf(clickOption);
                                            if (idsArr.includes(clickOption)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
                                            // functions.algorithmFunction(filledInputs);
                                            // setTimeout(() => {
                                            //     functions.checkResults();
                                            // }, 250)
                                        }, 250)
                                    } else if (winningChoise.length === 0) {
                                        index = Math.floor(Math.random() * idsArr.length);
                                        correctOption = idsArr[index];
                                        console.log(correctOption)
                                        setTimeout(() => {
                                            clickOption = correctOption;
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(clickOption);
                                            filledInputs.push(clickOption);
                                            index = idsArr.indexOf(clickOption);
                                            if (idsArr.includes(clickOption)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
                                            // functions.algorithmFunction(filledInputs);
                                            // setTimeout(() => {
                                            //     functions.checkResults();
                                            // }, 250)
                                        }, 250)
                                    }

                                } else if (player2Input[1] === "6") {
                                    let newArr = ["3", "9"];
                                    let winningChoise = newArr.filter((value) => idsArr.includes(value));
                                    if (winningChoise.length > 0) {
                                        index = Math.floor(Math.random() * winningChoise.length);
                                        correctOption = winningChoise[index];
                                        console.log(correctOption)
                                        setTimeout(() => {
                                            clickOption = correctOption;
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(clickOption);
                                            filledInputs.push(clickOption);
                                            index = idsArr.indexOf(clickOption);
                                            if (idsArr.includes(clickOption)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
                                            // functions.algorithmFunction(filledInputs);
                                            // setTimeout(() => {
                                            //     functions.checkResults();
                                            // }, 250)
                                        }, 250)
                                    } else if (winningChoise.lenght === 0) {
                                        index = Math.floor(Math.random() * idsArr.length);
                                        correctOption = idsArr[index];
                                        console.log(correctOption)
                                        setTimeout(() => {
                                            clickOption = correctOption;
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(clickOption);
                                            filledInputs.push(clickOption);
                                            index = idsArr.indexOf(clickOption);
                                            if (idsArr.includes(clickOption)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
                                            // functions.algorithmFunction(filledInputs);
                                            // setTimeout(() => {
                                            //     functions.checkResults();
                                            // }, 250)
                                        }, 250)
                                    }

                                } else if (player2Input[1] === "7") {
                                    if (idsArr.includes("1") || idsArr.includes("9")) {
                                        if (idsArr.includes("1") && idsArr.includes("4") && idsArr.includes("8") && idsArr.includes("9")) {
                                            setTimeout(() => {
                                                possibleOptions = ["1", "9"];
                                                randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                                player2Input.push(cpuInputClicked.id);
                                                filledInputs.push(cpuInputClicked.id);
                                                index = idsArr.indexOf(cpuInputClicked.id);
                                                if (idsArr.includes(cpuInputClicked.id)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                            }, 250);
                                        } else if (idsArr.includes("1") && idsArr.includes("4") && !idsArr.includes("8") && idsArr.includes("9")) {
                                            setTimeout(() => {
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "1" && idsArr.includes("1"))[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                                player2Input.push(cpuInputClicked.id);
                                                filledInputs.push(cpuInputClicked.id);
                                                index = idsArr.indexOf(cpuInputClicked.id);
                                                if (idsArr.includes(cpuInputClicked.id)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                            }, 250);
                                        } else if (idsArr.includes("8") && idsArr.includes("9") && !idsArr.includes("4") && idsArr.includes("1")) {
                                            setTimeout(() => {
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "9" && idsArr.includes("9"))[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                                player2Input.push(cpuInputClicked.id);
                                                filledInputs.push(cpuInputClicked.id);
                                                index = idsArr.indexOf(cpuInputClicked.id);
                                                if (idsArr.includes(cpuInputClicked.id)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                            }, 250);
                                        }
                                    }

                                } else if (player2Input[1] === "8") {
                                    if (length === 5) {
                                        setTimeout(() => {
                                            possibleOptions = ["7", "9"];
                                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250);
                                    } else if (length !== 5) {
                                        if (cpuWinningArrFor1.length > 0) {
                                            index = Math.floor(Math.random() * cpuWinningArrFor1.length);
                                            correctOption = cpuWinningArrFor1[index];
                                            console.log(correctOption)
                                            setTimeout(() => {
                                                clickOption = correctOption;
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                                player2Input.push(clickOption);
                                                filledInputs.push(clickOption);
                                                index = idsArr.indexOf(clickOption);
                                                if (idsArr.includes(clickOption)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
                                                // functions.algorithmFunction(filledInputs);
                                                // setTimeout(() => {
                                                //     functions.checkResults();
                                                // }, 250)
                                                // console.log("length > 2")
                                            }, 250)
                                        } else if (cpuWinningArrFor1.length === 0) {
                                            index = Math.floor(Math.random() * idsArr.length);
                                            correctOption = idsArr[index];
                                            setTimeout(() => {
                                                clickOption = correctOption;
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                                player2Input.push(clickOption);
                                                filledInputs.push(clickOption);
                                                index = idsArr.indexOf(clickOption);
                                                if (idsArr.includes(clickOption)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                                // functions.algorithmFunction(filledInputs);

                                                // setTimeout(() => {
                                                //     functions.checkResults();
                                                // }, 250)
                                            }, 250)

                                        }
                                    }
                                } else if (player2Input[1] === "9") {
                                    if (idsArr.includes("3") || idsArr.includes("7")) {
                                        if (idsArr.includes("3") && idsArr.includes("6") && idsArr.includes("7") && idsArr.includes("8")) {
                                            setTimeout(() => {
                                                possibleOptions = ["3", "7"];
                                                randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                                player2Input.push(cpuInputClicked.id);
                                                filledInputs.push(cpuInputClicked.id);
                                                index = idsArr.indexOf(cpuInputClicked.id);
                                                if (idsArr.includes(cpuInputClicked.id)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                            }, 250);
                                        } else if (idsArr.includes("3") && idsArr.includes("6") && !idsArr.includes("8") && idsArr.includes("7")) {
                                            setTimeout(() => {
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "3" && idsArr.includes("3"))[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                                player2Input.push(cpuInputClicked.id);
                                                filledInputs.push(cpuInputClicked.id);
                                                index = idsArr.indexOf(cpuInputClicked.id);
                                                if (idsArr.includes(cpuInputClicked.id)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                            }, 250);
                                        } else if (idsArr.includes("7") && idsArr.includes("8") && !idsArr.includes("6") && idsArr.includes("3")) {
                                            setTimeout(() => {
                                                cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "7" && idsArr.includes("7"))[0];
                                                cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                                player2Input.push(cpuInputClicked.id);
                                                filledInputs.push(cpuInputClicked.id);
                                                index = idsArr.indexOf(cpuInputClicked.id);
                                                if (idsArr.includes(cpuInputClicked.id)) {
                                                    idsArr.splice(index, 1);
                                                }
                                                playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                            }, 250);
                                        }
                                    }

                                }

                                // functions.algorithmFunction(filledInputs);
                                // setTimeout(() => {
                                //     functions.checkResults();
                                // }, 250)

                            } else if (player2Input[0] === "7") {
                                if (winningChoise.includes("1") && winningChoise.includes("3")) {

                                    if (player2Input[1] === "9" && ((player1Input[0] === "4" && player1Input[1] === "8") || (player1Input[0] === "8" && player1Input[1] === "4"))) {
                                        setTimeout(() => {
                                            possibleOptions = ["3", "5"];
                                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250);
                                    } else if (player2Input[1] === "9" && ((player1Input[0] === "6" && player1Input[1] === "8") || (player1Input[0] === "8" && player1Input[1] === "6"))) {
                                        setTimeout(() => {
                                            possibleOptions = ["1", "3"];
                                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250);
                                    } else {
                                        setTimeout(() => {
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "1" && idsArr.includes("1"))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250);
                                    }
                                } else if (player2Input[1] === "4" && player1Input[0] === "8") {
                                    setTimeout(() => {
                                        cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "5" && idsArr.includes("5"))[0];
                                        cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                        player2Input.push(cpuInputClicked.id);
                                        filledInputs.push(cpuInputClicked.id);
                                        index = idsArr.indexOf(cpuInputClicked.id);
                                        if (idsArr.includes(cpuInputClicked.id)) {
                                            idsArr.splice(index, 1);
                                        }
                                        playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                    }, 250);
                                } else {
                                    if (cpuWinningArrFor1.length > 0) {
                                        index = Math.floor(Math.random() * cpuWinningArrFor1.length);
                                        correctOption = cpuWinningArrFor1[index];
                                        console.log(correctOption)
                                        setTimeout(() => {
                                            clickOption = correctOption;
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(clickOption);
                                            filledInputs.push(clickOption);
                                            index = idsArr.indexOf(clickOption);
                                            if (idsArr.includes(clickOption)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
                                            // functions.algorithmFunction(filledInputs);
                                            // setTimeout(() => {
                                            //     functions.checkResults();
                                            // }, 250)
                                            console.log("length > 2")
                                        }, 250)
                                    } else if (cpuWinningArrFor1.length === 0) {
                                        index = Math.floor(Math.random() * idsArr.length);
                                        correctOption = idsArr[index];
                                        setTimeout(() => {
                                            clickOption = correctOption;
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                            player2Input.push(clickOption);
                                            filledInputs.push(clickOption);
                                            index = idsArr.indexOf(clickOption);
                                            if (idsArr.includes(clickOption)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                            // functions.algorithmFunction(filledInputs);

                                            // setTimeout(() => {
                                            //     functions.checkResults();
                                            // }, 250)
                                        }, 250)

                                    }
                                }

                            } else if (player2Input[0] === "9") {
                                if (winningChoise.includes("1") && winningChoise.includes("3")) {

                                    if (player2Input[1] === "7" && ((player1Input[0] === "4" && player1Input[1] === "8") || (player1Input[0] === "8" && player1Input[1] === "4"))) {
                                        setTimeout(() => {
                                            possibleOptions = ["3", "5"];
                                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250);
                                    } else if (player2Input[1] === "7" && ((player1Input[0] === "6" && player1Input[1] === "8") || (player1Input[0] === "8" && player1Input[1] === "6"))) {
                                        setTimeout(() => {
                                            possibleOptions = ["1", "5"];
                                            randomIndex = Math.floor(Math.random() * possibleOptions.length);
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === possibleOptions[randomIndex] && idsArr.includes(possibleOptions[randomIndex]))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250);
                                    } else {
                                        setTimeout(() => {
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "9" && idsArr.includes("9"))[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(cpuInputClicked.id);
                                            filledInputs.push(cpuInputClicked.id);
                                            index = idsArr.indexOf(cpuInputClicked.id);
                                            if (idsArr.includes(cpuInputClicked.id)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                        }, 250);
                                    }
                                } else if (player2Input[1] === "6" && player1Input[0] === "8") {
                                    setTimeout(() => {
                                        cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id === "5" && idsArr.includes("5"))[0];
                                        cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                        player2Input.push(cpuInputClicked.id);
                                        filledInputs.push(cpuInputClicked.id);
                                        index = idsArr.indexOf(cpuInputClicked.id);
                                        if (idsArr.includes(cpuInputClicked.id)) {
                                            idsArr.splice(index, 1);
                                        }
                                        playerSideImg.setAttribute('src', './assets/icon-o(third).svg');

                                    }, 250);

                                } else {
                                    if (cpuWinningArrFor1.length > 0) {
                                        index = Math.floor(Math.random() * cpuWinningArrFor1.length);
                                        correctOption = cpuWinningArrFor1[index];
                                        console.log(correctOption)
                                        setTimeout(() => {
                                            clickOption = correctOption;
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-x.svg');
                                            player2Input.push(clickOption);
                                            filledInputs.push(clickOption);
                                            index = idsArr.indexOf(clickOption);
                                            if (idsArr.includes(clickOption)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-o(third).svg');
                                            // functions.algorithmFunction(filledInputs);
                                            // setTimeout(() => {
                                            //     functions.checkResults();
                                            // }, 250)
                                            console.log("length > 2")
                                        }, 250)
                                    } else if (cpuWinningArrFor1.length === 0) {
                                        index = Math.floor(Math.random() * idsArr.length);
                                        correctOption = idsArr[index];
                                        setTimeout(() => {
                                            clickOption = correctOption;
                                            cpuInputClicked = inputsImgsArr.filter(inputImg => inputImg.id == clickOption)[0];
                                            cpuInputClicked.setAttribute('src', './assets/icon-o.svg');
                                            player2Input.push(clickOption);
                                            filledInputs.push(clickOption);
                                            index = idsArr.indexOf(clickOption);
                                            if (idsArr.includes(clickOption)) {
                                                idsArr.splice(index, 1);
                                            }
                                            playerSideImg.setAttribute('src', './assets/icon-x(second).svg');
                                            // functions.algorithmFunction(filledInputs);

                                            // setTimeout(() => {
                                            //     functions.checkResults();
                                            // }, 250)
                                        }, 250)

                                    }
                                }

                            }


                        }
                    }

                    setTimeout(() => {
                        functions.algorithmFunction(filledInputs);

                        setTimeout(() => {
                            functions.checkResults();
                        }, 250)
                    }, 250)


                    // }

                }
            })




        })


    }
}
// let winner = () => {
//     return winningArr.find((combination) => combination.every((value) => lastplayer1Input.includes(value)))
// }



