# main.py
from flask import render_template, request, redirect, url_for, flash
from init import app, data_base as db
from model import BlogPost


@app.route('/')
def home():
    posts = BlogPost.query.all()  # Query all posts to display on home page
    return render_template('home.html', posts=posts)


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/create_post', methods=['POST', 'GET'])
def create_post():
    if request.method == "POST":
        title = request.form['title']
        content = request.form['content']
        post = BlogPost(title=title, content=content,
                        user_id=None)  # Set user_id to None
        db.session.add(post)
        db.session.commit()
        return redirect(url_for('home'))
    return render_template('create_post.html')


@app.route('/post/<int:post_id>/delete', methods=['POST'])
def delete_post(post_id):
    post = BlogPost.query.get_or_404(post_id)
    db.session.delete(post)
    db.session.commit()
    flash('Your Post has been successfully deleted!')
    return redirect(url_for('home'))


if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create tables
    app.run(debug=True)
