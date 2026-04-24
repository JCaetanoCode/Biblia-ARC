    // ==================== VERSÍCULOS ALEATÓRIOS ====================
    const versiculos = [
        { texto: "No princípio, criou Deus os céus e a terra.", ref: "Gênesis 1:1" },
        { texto: "O Senhor é o meu pastor; nada me faltará.", ref: "Salmos 23:1" },
        { texto: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.", ref: "João 3:16" },
        { texto: "Tudo posso naquele que me fortalece.", ref: "Filipenses 4:13" },
        { texto: "Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que se não veem.", ref: "Hebreus 11:1" },
        { texto: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.", ref: "Mateus 11:28" },
        { texto: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a minha destra fiel.", ref: "Isaías 41:10" },
        { texto: "Todas as coisas contribuem juntamente para o bem daqueles que amam a Deus.", ref: "Romanos 8:28" },
        { texto: "Esta é a mensagem que dele ouvimos e vos anunciamos: Deus é luz, e não há nele treva nenhuma.", ref: "1 João 1:5" },
        { texto: "O amor é sofredor, é benigno; o amor não é invejoso; o amor não se vangloria, não se ensoberbece.", ref: "1 Coríntios 13:4" },
        { texto: "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.", ref: "Salmos 37:5" },
        { texto: "Alegrei-me quando me disseram: Vamos à casa do Senhor.", ref: "Salmos 122:1" },
        { texto: "E conhecereis a verdade, e a verdade vos libertará.", ref: "João 8:32" },
        { texto: "O Senhor é a minha luz e a minha salvação; a quem temerei?", ref: "Salmos 27:1" },
        { texto: "Sede vós também pacientes, fortalecei os vossos corações, porque já a vinda do Senhor está próxima.", ref: "Tiago 5:8" },
        { texto: "Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto.", ref: "Isaías 55:6" },
        { texto: "O choro pode durar uma noite, mas a alegria vem pela manhã.", ref: "Salmos 30:5" },
        { texto: "Em paz me deito e logo adormeço, porque só tu, Senhor, me fazes habitar em segurança.", ref: "Salmos 4:8" },
        { texto: "Jesus Cristo é o mesmo, ontem, e hoje, e eternamente.", ref: "Hebreus 13:8" },
        { texto: "Ouvirás a palavra de Deus, e a guardarás, e farás o que é reto aos olhos do Senhor.", ref: "Êxodo 15:26" },
        { texto: "Esforça-te e tem bom ânimo, não temas nem te espantes; porque o Senhor teu Deus é contigo, por onde quer que andares.", ref: "Josué 1:9" },
        { texto: "Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.", ref: "Salmos 119:105" },
        { texto: "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e tenha misericórdia de ti.", ref: "Números 6:24-25" },
        { texto: "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias.", ref: "Isaías 40:31" },
        { texto: "Eis que estou à porta e bato; se alguém ouvir a minha voz e abrir a porta, entrarei em sua casa e cearei com ele, e ele comigo.", ref: "Apocalipse 3:20" }
    ];

    function getVersiculoAleatorio() {
        const indice = Math.floor(Math.random() * versiculos.length);
        return versiculos[indice];
    }

    function mostrarVersiculoHome() {
        const versiculo = getVersiculoAleatorio();
        return `
            <div class="versiculo-container">
                <div class="versiculo-texto">"${versiculo.texto}"</div>
                <div class="versiculo-ref">— ${versiculo.ref}</div>
                <button class="btn-novo-versiculo" onclick="atualizarVersiculo()">
                    🔄 Novo Versículo
                </button>
            </div>
        `;
    }

    function atualizarVersiculo() {
        const versiculoDiv = document.querySelector('.versiculo-container');
        if (versiculoDiv) {
            const versiculo = getVersiculoAleatorio();
            versiculoDiv.innerHTML = `
                <div class="versiculo-texto">"${versiculo.texto}"</div>
                <div class="versiculo-ref">— ${versiculo.ref}</div>
                <button class="btn-novo-versiculo" onclick="atualizarVersiculo()">
                    🔄 Novo Versículo
                </button>
            `;
        }
    }

    function pagHomeCompleta() {
        return `
            <div class="boas-vindas">
                <h2>🙏 Bem-vindo à Bíblia ARC</h2>
                <p>Selecione um livro no menu ao lado para começar a leitura.</p>
                ${mostrarVersiculoHome()}
            </div>
        `;
    }

    // ==================== LIVROS ORGANIZADOS POR TEMA ====================
    const livrosAT = {
        "Pentateuco": ["Gênesis", "Êxodo", "Levítico", "Números", "Deuteronômio"],
        "Históricos": ["Josué", "Juízes", "Rute", "1 Samuel", "2 Samuel", "1 Reis", "2 Reis", "1 Crônicas", "2 Crônicas", "Esdras", "Neemias", "Ester"],
        "Poéticos e Sabedoria": ["Jó", "Salmos", "Provérbios", "Eclesiastes", "Cantares"],
        "Profetas Maiores": ["Isaías", "Jeremias", "Lamentações", "Ezequiel", "Daniel"],
        "Profetas Menores": ["Oséias", "Joel", "Amós", "Obadias", "Jonas", "Miquéias", "Naum", "Habacuque", "Sofonias", "Ageu", "Zacarias", "Malaquias"]
    };

    const livrosNT = {
        "Evangelhos": ["Mateus", "Marcos", "Lucas", "João"],
        "Histórico": ["Atos"],
        "Epístolas de Paulo": ["Romanos", "1 Coríntios", "2 Coríntios", "Gálatas", "Efésios", "Filipenses", "Colossenses", "1 Tessalonicenses", "2 Tessalonicenses", "1 Timóteo", "2 Timóteo", "Tito", "Filemom"],
        "Epístolas Gerais": ["Hebreus", "Tiago", "1 Pedro", "2 Pedro", "1 João", "2 João", "3 João", "Judas"],
        "Profecia": ["Apocalipse"]
    };

    // MAPEAMENTO dos nomes dos arquivos (AJUSTE conforme os nomes reais dos seus arquivos)
    const mapaArquivos = {
        "Gênesis": "genesis.html", "Êxodo": "exodo.html", "Levítico": "levitico.html", "Números": "numeros.html", "Deuteronômio": "deuteronomio.html",
        "Josué": "josue.html", "Juízes": "juizes.html", "Rute": "rute.html", "1 Samuel": "1samuel.html", "2 Samuel": "2samuel.html",
        "1 Reis": "1reis.html", "2 Reis": "2reis.html", "1 Crônicas": "1cronicas.html", "2 Crônicas": "2cronicas.html",
        "Esdras": "esdras.html", "Neemias": "neemias.html", "Ester": "ester.html",
        "Jó": "jo.html", "Salmos": "salmos.html", "Provérbios": "proverbios.html", "Eclesiastes": "eclesiastes.html", "Cantares": "cantares.html",
        "Isaías": "isaias.html", "Jeremias": "jeremias.html", "Lamentações": "lamentacoes.html", "Ezequiel": "ezequiel.html", "Daniel": "daniel.html",
        "Oséias": "oseias.html", "Joel": "joel.html", "Amós": "amos.html", "Obadias": "obadias.html", "Jonas": "jonas.html",
        "Miquéias": "miqueias.html", "Naum": "naum.html", "Habacuque": "habacuque.html", "Sofonias": "sofonias.html",
        "Ageu": "ageu.html", "Zacarias": "zacarias.html", "Malaquias": "malaquias.html",
        "Mateus": "mateus.html", "Marcos": "marcos.html", "Lucas": "lucas.html", "João": "joao.html",
        "Atos": "atos.html", "Romanos": "romanos.html", "1 Coríntios": "1corintios.html", "2 Coríntios": "2corintios.html",
        "Gálatas": "galatas.html", "Efésios": "efesios.html", "Filipenses": "filipenses.html", "Colossenses": "colossenses.html",
        "1 Tessalonicenses": "1tessalonicenses.html", "2 Tessalonicenses": "2tessalonicenses.html",
        "1 Timóteo": "1timoteo.html", "2 Timóteo": "2timoteo.html", "Tito": "tito.html", "Filemom": "filemom.html",
        "Hebreus": "hebreus.html", "Tiago": "tiago.html", "1 Pedro": "1pedro.html", "2 Pedro": "2pedro.html",
        "1 João": "1joao.html", "2 João": "2joao.html", "3 João": "3joao.html", "Judas": "judas.html",
        "Apocalipse": "apocalipse.html"
    };

    function mostrarTestamento(tipo) {
        const menuDiv = document.getElementById("menu-livros");
        menuDiv.innerHTML = "";
        const livros = tipo === "AT" ? livrosAT : livrosNT;
        
        for (let [tema, lista] of Object.entries(livros)) {
            const temaDiv = document.createElement("div");
            temaDiv.className = "tema";
            temaDiv.innerText = tema;
            menuDiv.appendChild(temaDiv);
            
            lista.forEach(livro => {
                const link = document.createElement("div");
                link.className = "livro-link";
                link.innerText = livro;
                link.onclick = () => abrirLivro(livro);
                menuDiv.appendChild(link);
            });
        }
    }

    function abrirLivro(livro) {
        const arquivo = mapaArquivos[livro];
        const conteudoArea = document.getElementById("conteudoArea");
        
        if (!arquivo) {
            conteudoArea.innerHTML = `
                <div style="background: white; padding: 40px; border-radius: 12px; text-align: center;">
                    <h2 style="color: #c0392b;">❌ Livro não encontrado</h2>
                    <p>Não foi possível encontrar o arquivo: <strong>${livro}.html</strong></p>
                    <p>Verifique se o nome do arquivo está correto.</p>
                </div>
            `;
            return;
        }
        
        // Abre o livro em um iframe
        conteudoArea.innerHTML = `<iframe class="bible-frame" src="${arquivo}" title="${livro}"></iframe>`;
    }

    function voltarHome() {
        const conteudoArea = document.getElementById("conteudoArea");
        conteudoArea.innerHTML = pagHomeCompleta();
    }

    // Inicializa com o Antigo Testamento e a página Home
    mostrarTestamento("AT");
    voltarHome();
