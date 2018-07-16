function check() {
        var inp1 = document.getElementById('input1'),
        inp2 = document.getElementById('input2'),
        inp3 = document.getElementById('input3');
        inp4 = document.getElementById('input4');
      document.getElementById('send').disabled = inp1.value && inp2.value && inp3.value ? false : "disabled";

    }

    document.getElementById('send').onclick = function() {
        document.getElementById('text__send').classList.remove('is-hidden');
      }
    

      document.getElementById('burger').onclick = function() {
        document.getElementById('menu__yellow').classList.add('is-visible');
        document.getElementById('menu').classList.add('is-visible');
      }
      