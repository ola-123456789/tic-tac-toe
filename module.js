"use strict"

let xClicked = false;
let oClicked = false;
let playerVsCpu = true;

const formulas = {

    selectXside: (playerX, isXClicked, isOClicked, playerXLabel, playerOLabel, newGameVsCpuBtn, newGameVsPlayerBtn) => {
        playerX.addEventListener('click', () => {
            isXClicked = true;
            isOClicked = false;
            xClicked = isXClicked;
            oClicked = isOClicked;
            newGameVsCpuBtn.disabled = false;
            newGameVsPlayerBtn.disabled = false;
            if (isXClicked) {
                playerXLabel.classList.add('active_x')
                playerXLabel.style.backgroundColor = '#1A2A33';
                playerOLabel.classList.remove('active_o');
            }
            let playerSide = playerX.value;
            let countWinPlayerSide1 = "0";
            let countWinPlayerSide2 = "0";
            let countTies = "0";
            localStorage.setItem("playerSide", playerSide);
            localStorage.setItem("countWinPlayerSide1", countWinPlayerSide1);
            localStorage.setItem("countWinPlayerSide2", countWinPlayerSide2);
            localStorage.setItem("countTies", countTies);
        })
    },

    selectOside: (playerO, isXClicked, isOClicked, playerXLabel, playerOLabel, newGameVsCpuBtn, newGameVsPlayerBtn) => {
        playerO.addEventListener('click', () => {
            isXClicked = false;
            isOClicked = true;
            xClicked = isXClicked;
            oClicked = isOClicked;
            newGameVsCpuBtn.disabled = false;
            newGameVsPlayerBtn.disabled = false;
            if (isOClicked) {
                playerOLabel.classList.add('active_o')
                playerOLabel.style.backgroundColor = '#1A2A33';
                playerXLabel.classList.remove('active_x');
            }
            let playerSide = playerO.value;
            let countWinPlayerSide1 = "0";
            let countWinPlayerSide2 = "0";
            let countTies = "0";
            localStorage.setItem("playerSide", playerSide);
            localStorage.setItem("countWinPlayerSide1", countWinPlayerSide1);
            localStorage.setItem("countWinPlayerSide2", countWinPlayerSide2);
            localStorage.setItem("countTies", countTies);
        })
    },

    newGameVsCpu: (newGameVsCpuBtn) => {
        newGameVsCpuBtn.addEventListener('click', () => {
            localStorage.setItem("gameType", playerVsCpu);
            console.log(localStorage.getItem('gameType'))
            window.location.href = "main.html";
        })
    },

    newGameVsPlayer: (newGameVsPlayerBtn) => {
        newGameVsPlayerBtn.addEventListener('click', () => {
            playerVsCpu = false;
            localStorage.setItem("gameType", playerVsCpu);
            console.log(localStorage.getItem('gameType'))
            window.location.href = "main.html"
        })
    },

    xLabelHover: (label) => {
        if (!xClicked) {
            label.style.backgroundColor = 'rgba(168, 191, 201, 0.05)';

        }

    },
    oLabelHover: (label) => {
        if (!oClicked) {
            label.style.backgroundColor = 'rgba(168, 191, 201, 0.05)';
        }

    },

    xLabelMouseOut: (label) => {
        if (!xClicked) {
            label.style.backgroundColor = '#1A2A33';
        }


    },

    oLabelMouseOut: (label) => {
        if (!oClicked) {
            label.style.backgroundColor = '#1A2A33';
        }


    }
}

export default formulas;

