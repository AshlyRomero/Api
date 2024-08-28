document.getElementById('get-answer').addEventListener('click', () => {
    const questionInput = document.getElementById('question-input').value;
    if (questionInput.trim() === "") {
        alert("Por favor, escribe una pregunta.");
        return;
    }

    fetch('https://yesno.wtf/api')
        .then(response => response.json())
        .then(data => {
            const filterValue = document.getElementById('filter').value;
            const answer = data.answer;

            // Mostrar información detallada de la API
            document.getElementById('api-answer').textContent = answer.charAt(0).toUpperCase() + answer.slice(1);
            document.getElementById('api-image-url').textContent = data.image;
            document.getElementById('api-image-url').href = data.image;
            document.getElementById('api-forced').textContent = data.forced ? "Sí" : "No";

            // Filtrar respuesta según la selección
            if (filterValue === 'all' || filterValue === answer) {
                document.getElementById('result-img').src = data.image;
                document.getElementById('answer').textContent = answer.charAt(0).toUpperCase() + answer.slice(1);
            } else {
                document.getElementById('result-img').src = '';
                document.getElementById('answer').textContent = 'No hay resultados para este filtro.';
            }
        })
        .catch(error => console.error('Error:', error));
});
