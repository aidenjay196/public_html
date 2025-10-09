<!DOCTYPE html>
<html lang="en">
<head>
    <title>Registration Result</title>
</head>
<body>
  <h1>Registration Submitted!</h1>

  <?php
    if (!empty($_GET)) {
      echo "<h2>Submitted Information:</h2>";
      echo "<ul>";
      foreach ($_GET as $key => $value) {
        // Handle checkboxes, which can have multiple values
        if (is_array($value)) {
          $values = implode(", ", $value);
          echo "<li><strong>" . htmlspecialchars($key) . ":</strong> " . htmlspecialchars($values) . "</li>";
        } else {
          echo "<li><strong>" . htmlspecialchars($key) . ":</strong> " . htmlspecialchars($value) . "</li>";
        }
      }
      echo "</ul>";
    } else {
      echo "<p>No data was submitted.</p>";
    }
  ?>

  <p><a href="form.html">Go back to the form</a></p>

</body>
</html>
