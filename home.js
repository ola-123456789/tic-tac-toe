"use strict"

import formulas from "./module.js";


const variables = {
    isXClicked: false,
    isOClicked: false,
    newGameVsCpuBtn: document.getElementById('new_game_vs_cpu'),
    newGameVsPlayerBtn: document.getElementById('new_game_vs_player'),
    playerX: document.getElementById('player_x'),
    playerXLabel: document.getElementById('player_x_label'),
    playerO: document.getElementById('player_o'),
    playerOLabel: document.getElementById('player_o_label')
}

formulas.newGameVsCpu(variables.newGameVsCpuBtn);
formulas.newGameVsPlayer(variables.newGameVsPlayerBtn);
formulas.selectXside(variables.playerX, variables.isXClicked, variables.isOClicked, variables.playerXLabel, variables.playerOLabel, variables.newGameVsCpuBtn, variables.newGameVsPlayerBtn);
formulas.selectOside(variables.playerO, variables.isXClicked, variables.isOClicked, variables.playerXLabel, variables.playerOLabel, variables.newGameVsCpuBtn, variables.newGameVsPlayerBtn);

variables.playerXLabel.addEventListener('mouseover', () => {
    formulas.xLabelHover(variables.playerXLabel);

});



variables.playerXLabel.addEventListener('mouseout', () => {
    formulas.xLabelMouseOut(variables.playerXLabel);
});



variables.playerOLabel.addEventListener('mouseover', () => {
    formulas.oLabelHover(variables.playerOLabel);

});



variables.playerOLabel.addEventListener('mouseout', () => {
    formulas.oLabelMouseOut(variables.playerOLabel);

});



