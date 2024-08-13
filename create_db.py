from init import app, data_base as db

with app.app_context():
    db.create_all()
