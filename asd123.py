import turtle
import math

# Настройка экрана
screen = turtle.Screen()
screen.bgcolor("black")
screen.title("Интересные фигуры")
screen.setup(800, 600)

t = turtle.Turtle()
t.shape("turtle")
t.speed(0)

# Функция для рисования спирали
def draw_spiral(colors):
    t.penup()
    t.goto(-200, 200)
    t.pendown()
    for i in range(100):
        t.color(colors[i % len(colors)])
        t.forward(i * 2)
        t.right(91)

# Функция для рисования цветка
def draw_flower():
    t.penup()
    t.goto(0, 0)
    t.pendown()
    t.color("red")
    for i in range(36):
        t.circle(50)
        t.right(10)

# Функция для рисования звезды
def draw_star(size, x, y):
    t.penup()
    t.goto(x, y)
    t.pendown()
    t.color("yellow")
    for i in range(5):
        t.forward(size)
        t.right(144)

# Функция для рисования фрактальной снежинки
def draw_snowflake(length, levels):
    if levels == 0:
        t.forward(length)
        return
    
    length /= 3.0
    draw_snowflake(length, levels-1)
    t.left(60)
    draw_snowflake(length, levels-1)
    t.right(120)
    draw_snowflake(length, levels-1)
    t.left(60)
    draw_snowflake(length, levels-1)

# Функция для рисования многоугольника с градиентом
def draw_polygon_spiral():
    t.penup()
    t.goto(200, -100)
    t.pendown()
    colors = ["red", "orange", "yellow", "green", "blue", "purple"]
    for i in range(60):
        t.color(colors[i % len(colors)])
        t.forward(i * 2)
        t.right(91)
        t.circle(10)

# Рисуем все фигуры
print("Рисуем спираль...")
draw_spiral(["red", "orange", "yellow", "green", "blue", "purple"])

print("Рисуем цветок...")
draw_flower()

print("Рисуем звёзды...")
draw_star(100, -300, -200)
draw_star(60, 250, 150)
draw_star(80, 150, -250)

print("Рисуем фрактальную снежинку...")
t.penup()
t.goto(-100, -100)
t.pendown()
t.color("cyan")
for i in range(3):
    draw_snowflake(150, 3)
    t.right(120)

print("Рисуем спираль с кругами...")
draw_polygon_spiral()

# Дополнительная красивая фигура - мандала
def draw_mandala():
    t.penup()
    t.goto(0, -300)
    t.pendown()
    colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "cyan"]
    for i in range(36):
        t.color(colors[i % len(colors)])
        t.circle(100)
        t.right(10)
        t.circle(50)
        t.right(10)

print("Рисуем мандалу...")
draw_mandala()

print("Готово! Нажмите на экран, чтобы закрыть.")
screen.exitonclick()
