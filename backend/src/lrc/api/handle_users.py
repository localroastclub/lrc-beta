from lrc.models import User

# TODO: may use this as a space to fetch and update entries to the user table of the database
"""
  1. when user creates an account, save info both to auth and to here
    u = User(id = 123456, firstname = 'test', lastname = 'blahblah', email = 'larobertson990@gmail.com', zipcode = 78723)
    u.save() 
  2. When user updates profile we want to update the info here (including when the first checkout, address must be saved)

  REF:
  https://docs.djangoproject.com/en/3.0/topics/db/queries/
"""
