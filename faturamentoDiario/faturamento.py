import json

def calcular_faturamento(dados):
    valores_faturamento = [dia["valor"] for dia in dados]
    menor_valor = min(valores_faturamento)
    maior_valor = max(valores_faturamento)
    media_mensal = sum(valores_faturamento) / len(valores_faturamento)
    dias_acima_media = sum(1 for valor in valores_faturamento if valor > media_mensal)
    return menor_valor, maior_valor, dias_acima_media

def ler_dados_json(nome_arquivo):
    with open(nome_arquivo, 'r') as arquivo:
        dados = json.load(arquivo)
    return dados

nome_arquivo = "faturamentoDiario/dados.json"

dados_faturamento = ler_dados_json(nome_arquivo)

menor_valor, maior_valor, dias_acima_media = calcular_faturamento(dados_faturamento)

print("Menor valor de faturamento:", menor_valor)
print("Maior valor de faturamento:", maior_valor)
print("Número de dias com faturamento acima da média mensal:", dias_acima_media)
