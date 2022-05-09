$(document).ready(function() 
{
    $('#example').DataTable( 
        {
            "processing": true,
            "serverSide": true,
            "ajax": "scripts/post.php"
        });
} );