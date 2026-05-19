import pyautogui
import time

# Set the interval between clicks in seconds (e.g., 0.5 for two clicks per second)
interval = 0.5

# A 3-second countdown to let you move your mouse to the desired location
print("Auto-clicker starting in 3 seconds...")
time.sleep(3)
print("Clicking started. Move mouse to top-left corner to stop.")

try:
    # Loop indefinitely, clicking the left mouse button at the current location
    while True:
        pyautogui.click(button='left')
        time.sleep(interval)
except pyautogui.FailSafeException:
    # This exception is raised if the mouse is moved to the top-left corner (0, 0)
    print("Failsafe triggered. Auto-clicker stopped.")
except KeyboardInterrupt:
    print("Auto-clicker stopped by user.")
