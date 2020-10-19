function expandirTexto() {
    var textoCompleto = "Kioto (京都市 Kyōto-shi?, en español «ciudad capital»; Pronunciación japonesa: Acerca de este sonido [kʲoːto] (?·i)) es una importante ciudad de Japón, localizada en la parte central de la isla de Honshu. Es la capital de la Prefectura homónima y tradicionalmente también ha sido considerada capital de la Región de Kansai, aunque esta sea solo una referencia geográfica más que un territorio administrativo concreto. Así mismo, está integrada dentro de la Región metropolitana de Keihanshin, compuesta por las áreas circundantes de las ciudades de Osaka, Kobe y la misma Kioto.4​ Cuenta con una población de alrededor de 1 475 000 habitantes (a fecha de 2015), situándose entre las ciudades japonesas más pobladas.1​ El área total del territorio de la ciudad es de 827,83 km². " + 
    "Su importancia histórica se debe al hecho de que entre los años 794 y 1868 constituyó la capital de Japón, acogiendo la sede de la Corte imperial y otras instituciones. En el año 1868 el emperador Meiji decidió trasladar la sede de la corte a Tokio, quedando la ciudad definitivamente en un segundo plano. Durante la Segunda Guerra Mundial fue la única gran ciudad japonesa que no resultó bombardeada por la Fuerza aérea estadounidense. Por esta razón, a día de hoy sigue constituyendo una de las importantes urbes japonesas, con un rico patrimonio histórico, artístico y arquitectónico. El 11 de diciembre de 1997 tuvo lugar en esta ciudad la firma de un protocolo que perseguía el objetivo de reducir las emisiones de gases de efecto invernadero que causan el calentamiento global.El acuerdo internacional acabaría siendo conocido popularmente como el Protocolo de Kioto.";
    document.getElementById("kioto").innerHTML = textoCompleto;
}
function lugares() {
    var listaLugares = "<ol><li>Tokio</li><li>Osaka</li><li>Kioto</li></ol>";
    document.getElementById("listaCiudades").innerHTML = listaLugares;
}