import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y1 = [1, 2, 3, 4, 5]
y2 = [2, 4, 6, 8, 10]

plt.plot(x, y1, label='Line 1', color='red')
plt.plot(x, y2, label='Line 2', color='blue')

plt.title("Multiple Line Graph")
plt.xlabel("X Axis")
plt.ylabel("Y Axis")
plt.legend()
plt.show()
