from django.db import migrations

def seed(apps, schema_editor):
    Post = apps.get_model('social', 'Post')
    NewUser = apps.get_model('social', 'NewUser')
    user_one = NewUser(email='user_one@example.com', user_name='one only', password='123456')
    user_two = NewUser(email='user_two@example.com', user_name='two prime', password='123456')
    user_three = NewUser(email='user_three@example.com', user_name='three odd', password='123456')
    user_four = NewUser(email='user_four@example.com', user_name='four pair', password='123456')
    user_one.save()
    user_two.save()
    user_three.save()
    user_four.save()

    Post(newuser = user_four, content='Concern strategy myself hold born. ', image='https://images.unsplash.com/photo-1640622660721-45b83554ab05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60').save()
    Post(newuser = user_four, content='Consumer physical where.', image='https://images.unsplash.com/photo-1644072978911-08ad91983bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60').save()
    Post(newuser = user_one, content='Minute third inside far wear conference long.', image='https://images.unsplash.com/photo-1644245937251-a56c28e9897b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60').save()
    Post(newuser = user_three, content='Hard since little stay boy as.', image='https://images.unsplash.com/photo-1644244330463-089bb3ce4993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60').save()
    Post(newuser = user_three, content='Effort owner kind past', image='https://images.unsplash.com/photo-1644242566776-961cb52f2ef9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60').save()
    Post(newuser = user_two, content='Detail fact each animal. School third including.', image='https://images.unsplash.com/photo-1644232820668-ac90808d93fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60').save()

def fallow(apps, schema_editor):
    Post = apps.get_model('social', 'Post')
    User = apps.get_model('social', 'NewUser')
    User.objects.all().delete()
    Post.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ('social', '0002_newuser_is_active_newuser_is_staff'),
    ]

    operations = [
        migrations.RunPython(seed, fallow)
    ]
