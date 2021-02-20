@app.route('/')
def Login():
    return render_template('Login.html', foo=42)
 
