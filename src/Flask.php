app = Flask(  name  )


@app.route("/<name>/<mobile>") def user(name,mobile):
return "Welcome " + str(name) + " Your Mobile No is " + mobile



if   name  == "_main_":

app.run(debug=True)
