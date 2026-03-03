import Map "mo:core/Map";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  // Types
  type BlogPost = {
    id : Nat;
    title : Text;
    date : Text;
    category : Text;
    content : Text;
    excerpt : Text;
  };

  type ContactMessage = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  module BlogPost {
    public func compareByDate(post1 : BlogPost, post2 : BlogPost) : Order.Order {
      Text.compare(post2.date, post1.date);
    };
  };

  // State
  var nextBlogPostId = 5;
  var nextMessageId = 1;

  let blogPosts = Map.fromIter<Nat, BlogPost>([
    (
      1,
      {
        id = 1;
        title = "The Power of Mindfulness";
        date = "2024-04-15";
        category = "Lifestyle";
        content = "Discover the benefits of mindfulness and how it can transform your life.";
        excerpt = "Explore the benefits of living in the present moment and how mindfulness practices can enhance your well-being.";
      },
    ),
    (
      2,
      {
        id = 2;
        title = "Embracing Creativity";
        date = "2024-04-12";
        category = "Creativity";
        content = "Unlock your creative potential with practical tips and inspiration.";
        excerpt = "Learn how to foster creativity in everyday life with simple techniques and exercises.";
      },
    ),
    (
      3,
      {
        id = 3;
        title = "Animated Storytelling Techniques";
        date = "2024-04-10";
        category = "Animation";
        content = "Master the art of storytelling through animation.";
        excerpt = "Learn how to bring stories to life with animation, covering key techniques and tools.";
      },
    ),
    (
      4,
      {
        id = 4;
        title = "Healthy Lifestyle Habits";
        date = "2024-04-08";
        category = "Lifestyle";
        content = "Tips for maintaining a healthy lifestyle.";
        excerpt = "Discover practical tips for integrating healthy habits into your daily routine.";
      },
    ),
  ].values());
  let contactMessages = Map.empty<Nat, ContactMessage>();

  // Blog Post Functions
  public query ({ caller }) func getAllPosts() : async [BlogPost] {
    blogPosts.values().toArray().sort(BlogPost.compareByDate);
  };

  public query ({ caller }) func getPostById(id : Nat) : async BlogPost {
    switch (blogPosts.get(id)) {
      case (null) { Runtime.trap("Post not found") };
      case (?post) { post };
    };
  };

  // Contact Form Functions
  public shared ({ caller }) func submitContactMessage(name : Text, email : Text, message : Text) : async () {
    let newMessage : ContactMessage = {
      id = nextMessageId;
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactMessages.add(nextMessageId, newMessage);
    nextMessageId += 1;
  };

  public query ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    contactMessages.values().toArray();
  };
};
