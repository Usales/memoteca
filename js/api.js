//criacao da api
    //esses codigos abaixo, fazem a requisição da API
const api = {
    async buscarPensamentos() {
        try { 
            const response = await fetch('http://localhost:3000/pensamentos');
            return await response.json();
        } catch (error) {
            alert('Erro, api buscar pensamentos');
            throw error;
        }
    },
    //Adiciona um novo pensamento
    async salvarPensamento(pensamento) {
        try { 
            const response = await fetch('http://localhost:3000/pensamentos', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            });
            return await response.json();
        } catch (error) {
            alert('Erro, api salvar pensamento');
            throw error;
        }
    },
    //Remove um novo pensamento
    async deletarPensamento(id) {
        try {
            await fetch(`http://localhost:3000/pensamentos/${id}`, {
                method: "DELETE"
            });
        } catch (error) {
            alert('Erro ao deletar pensamento');
            throw error;
        }
    }
};

export default api;