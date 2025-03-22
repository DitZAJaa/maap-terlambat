<script>
    window.onload = function() {
        var audio = document.getElementById('bg-music');
        audio.play().catch(function(error) {
            console.log("Autoplay diblokir. Coba interaksi pengguna untuk memulai musik.");
        });
    };
</script>