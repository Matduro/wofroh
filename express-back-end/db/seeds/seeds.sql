INSERT INTO users (
name, email, username, password) 
VALUES (
'Devin Sanders', 'tristanjacobs@gmail.com', 'Colonel-Sanders', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (
name, email, username, password) 
VALUES (
'Iva Harrison', 'allisonjackson@mail.com', 'Ivar-The-Strongest','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (
name, email, username, password)  
VALUES (
'Lloyd Jefferson', 'asherpoole@gmx.com', 'Jiffy','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (
name, email, username, password)  
VALUES (
'Andy Lindsay', 'pogchamp@gmx.com', 'Incredible-Hulk','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO workouts (
name, workout_time)
VALUES (
  'Angry Eugene', 60
  );
INSERT INTO workouts (
name, workout_time)
VALUES (
  'Goggins Joggin', 60
  );
INSERT INTO workouts (
name, workout_time)
VALUES (
  'Jedi Master', 60
  );


INSERT INTO muscle_groups (
  muscle_url, title)
  VALUES (
    'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'Legs');
INSERT INTO muscle_groups (
  muscle_url, title)
  VALUES (
    'https://images.pexels.com/photos/3076516/pexels-photo-3076516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'Core');
INSERT INTO muscle_groups (
  muscle_url, title)
  VALUES (
    'https://images.pexels.com/photos/700446/pexels-photo-700446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'Arms');
INSERT INTO muscle_groups (
  muscle_url, title)
  VALUES (
    'https://images.pexels.com/photos/5067739/pexels-photo-5067739.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'Shoulders');
INSERT INTO muscle_groups (
  muscle_url, title)
  VALUES (
    'https://images.pexels.com/photos/50597/man-male-boy-a-person-50597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'Back');
INSERT INTO muscle_groups (
  muscle_url, title)
  VALUES (
    'https://images.pexels.com/photos/6009290/pexels-photo-6009290.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'Cardio');
INSERT INTO muscle_groups (
  muscle_url, title)
  VALUES (
    'https://images.pexels.com/photos/4720326/pexels-photo-4720326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'Chest');

INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating) 
VALUES (
2, 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Falk%2C_Benjamin_J._%281853-1925%29_-_Eugen_Sandow_%281867-1925%29.jpg', 'bicep curls', 'https://media.giphy.com/media/10cylTGU0KcAsE/giphy.gif', 'info should be here', 300, 36, 3, 1, 4);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating) 
VALUES (
6, 'https://www.elitefts.com/wp/wp-content/uploads/2012/03/IMG_1456-600x300.jpg', 'bench press', 'https://media.giphy.com/media/3o6ZsYzuLyRfSGX4f6/giphy.gif', 'info should be here', 300, 36, 3, 3, 5);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
1, 'https://ericcooperfitness.com/blog/wp-content/uploads/2017/09/eric_ball-copy-copy2-copy-2.jpg', 'medicine ball wood chopper', 'https://media.giphy.com/media/mnPBQeSZp8XN6/giphy.gif', 'info should be here', 300, 50, 3, 4, 3);


INSERT INTO workout_exercises (
excercise_id, workout_id)
VALUES (
1, 1);
INSERT INTO workout_exercises (
excercise_id, workout_id)
VALUES (
3, 3);
INSERT INTO workout_exercises (
excercise_id, workout_id)
VALUES (
2, 1);



INSERT INTO user_ratings (
 user_id, workout_id, workout_rating, likes, workout_score, comments)
 VALUES (
   1, 2, 5, true, 75, 'Bro, this workout plan was lit!'
);
INSERT INTO user_ratings (
 user_id, workout_id, workout_rating, likes, workout_score, comments)
 VALUES (
   2, 3, 4, true, 50, 'Bro, this workout plan was lit!'
);
INSERT INTO user_ratings(
 user_id, workout_id, workout_rating, likes, workout_score, comments)
 VALUES (
   3, 1, 5, true, 50, 'I don''t think I can take more than one workout like this per month, but wow I''ve never felt better'
);


INSERT INTO messagings (
 sender_user_id, receiver_user_id, message)
 VALUES (
   1, 2, 'Bro, this was the sickest workout of all time.'
);
INSERT INTO messagings (
 sender_user_id, receiver_user_id, message)
 VALUES (
   2, 1, 'I know right?! We''re going to make all kinds of gainz'
);


INSERT INTO user_workouts (
 user_id, workout_id, workout_completed, workout_saved)
 VALUES (
   1, 1, TRUE, FALSE
);
INSERT INTO user_workouts (
 user_id, workout_id, workout_completed, workout_saved)
 VALUES (
   2, 2, TRUE, TRUE
);
INSERT INTO user_workouts (
 user_id, workout_id, workout_completed, workout_saved)
 VALUES (
   3, 3, FALSE, FALSE
);

INSERT INTO friends (
 friend_1_id, friend_2_id)
 VALUES (
   1, 3
);
INSERT INTO friends (
 friend_1_id, friend_2_id)
 VALUES (
   2, 3
);
INSERT INTO friends (
 friend_1_id, friend_2_id)
 VALUES (
   2, 1
);