# main-api.py
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

usersObj = ''
with open('users.json','r') as f:
  usersObj = f.read()

@app.route("/users")
def users():
    return usersObj


if __name__ == "__main__":
    app.run(debug=True)
