/**
 * Acomodar los numeros de consola para que salgan en orden...
 */

console.log("0")

function teEspero(){
    // console.log("1")

    setTimeout(function() { console.log("2")}, 0);
   return;
}

console.log("3")
teEspero()
console.log("4")


/**
 * Veamos como funciona en:
 * http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIjAiKQoKZnVuY3Rpb24gdGVFc3Blcm8oKXsKY29uc29sZS5sb2coIjEiKQoKc2V0VGltZW91dChmdW5jdGlvbigpIHsgY29uc29sZS5sb2coIjIiKX0sIDEwMDApOwogICByZXR1cm47Cn0KCmNvbnNvbGUubG9nKCIzIikKdGVFc3Blcm8oKQpjb25zb2xlLmxvZygiNCIp!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
 * 
 */