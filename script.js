var etanol, gasolina;

function calcular()
{
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(',' , '.'));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(',' , '.'));

    if(frmFlex.txtEtanol.value === '' || frmFlex.txtGasolina.value === '')
    {
        window.alert('Não podem ser enviados campos em branco! Por favor preencha os campos solicitados.')
    }
        else
        {
            if(etanol < 0.7 * gasolina)
            {
                window.alert('Abasteça com Etanol! O preço está equivalente a 70% ou menos em relação ao preço da gasolina.');
            }
            else
            {
                window.alert('Abasteça com Gasolina! O preço do Etanol está equivalente a mais de 70% em relação ao preço da gasolina.');
            }
        }  
}
