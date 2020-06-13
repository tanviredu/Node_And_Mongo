    <script>
      fetch('https://my-json-server.typicode.com/typicode/demo/posts')
        .then(response => response.json())
        .then(data => {
          let string_data = JSON.stringify(data);
          let formatted_data = '';
          

          data.forEach(element => {
              console.log(element.id);
              console.log(element.title);
              formatted_data += '<div><h3>' + element.id + ' - $' + element.title + '</h3></div>';
          });

          let clothing_div = document.getElementById('clothing-list');
          clothing_div.innerHTML = formatted_data;
        });
    </script>
    