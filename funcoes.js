var etanol, gasolina;

function calcular(){
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(',' , '.'));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(',' , '.'));
      
    if(etanol < 0.7 * gasolina){
        document.write('Abasteça com: <h3>Etanol!</h3><img src="etanol.png"/><br> O preço está equivalente a 70% ou menos em relação ao preço da gasolina.');
    } else{
        document.write('Abasteça com: <h3>Gasolina!</h3><img src="gasolina.png"/><br> O preço do Etanol está equivalente a mais de 70% em relação ao preço da gasolina.');
    }
}
