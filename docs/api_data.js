define({ "api": [
  {
    "type": "Post",
    "url": "/sessions/check",
    "title": "Session Check",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "name": "Check",
    "group": "Auth",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "SessionExist-Response:",
          "content": "HTTP/1.1 200\n{\n  \"success\": true,\n  \"data\": {\n    \"isAlive\": true,\n    \"user_id\": \"\",\n    \"slug\": \"\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "SessionNotExist-Response:",
          "content": "HTTP/1.1 200\n{\n  \"success\": true,\n  \"data\": {\n    \"isAlive\": false\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "libs/routers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "Post",
    "url": "/sessions",
    "title": "Login",
    "name": "Login",
    "group": "Auth",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "UserNotFound-Response:",
          "content": "HTTP/1.1 200\n{\n  \"success\": false,\n  \"message\": \"yanlış e-posta/şifre\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n  \"success\": true,\n  \"data\": {\n    user_id: \"\",\n    token: \"\",\n    email: \"\",\n    username: \"\",\n    slug: \"\",\n    authority: \"\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "libs/routers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "Delete",
    "url": "/sessions",
    "title": "Logout",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "name": "Logout",
    "group": "Auth",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n  success: true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "libs/routers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "Post",
    "url": "/users",
    "title": "Register",
    "name": "Register",
    "group": "Auth",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "AlreadyRegistered-Response:",
          "content": "HTTP/1.1 200\n{\n  \"success\": false,\n  \"message\": \"böyle birisi var ama\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n  \"success\": true,\n  \"data\": {\n    user_id: \"\",\n    token: \"\",\n    email: \"\",\n    username: \"\",\n    slug: \"\",\n    authority: \"\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "libs/routers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/entries",
    "title": "Create Entry",
    "name": "CreateEntry",
    "group": "Entry",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "topic_id",
            "description": "<p>topic id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>text</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n  \"success\": true,\n  \"data\": {\n    \"entry_id\": \"\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "libs/routers/entry.js",
    "groupTitle": "Entry"
  },
  {
    "type": "delete",
    "url": "/entries/:id",
    "title": "Remove Entry With Id",
    "name": "RemoveEntry",
    "group": "Entry",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "libs/routers/entry.js",
    "groupTitle": "Entry"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Index",
    "name": "index",
    "group": "Home",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "libs/routers/home.js",
    "groupTitle": "Home"
  },
  {
    "type": "get",
    "url": "/status",
    "title": "Status",
    "name": "status",
    "group": "Home",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n  \"success\": true,\n  \"data\": {\n    \"version\": \"\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "libs/routers/home.js",
    "groupTitle": "Home"
  },
  {
    "type": "post",
    "url": "/topics",
    "title": "Create Topic",
    "name": "CreateTopic",
    "group": "Topic",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data.entry",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.entry.text",
            "description": "<p>text</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data.topic",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.topic.title",
            "description": "<p>title</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n  \"success\": true,\n  \"entry_id\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "libs/routers/topic.js",
    "groupTitle": "Topic"
  },
  {
    "type": "get",
    "url": "/topics/i/random",
    "title": "Get Random 5 Topic",
    "name": "GetRandomTopics",
    "group": "Topic",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n  \"success\": true,\n  \"data\": [\n    \"entry\": {\n      \"id\": \"\",\n      \"user\": {\n        \"id\": \"\",\n        \"slug\": \"\",\n        \"username\": \"\"\n      },\n      \"text\": \"\",\n      \"upvotes_count\": 0...n,\n      \"downvotes_count\": 0...n,\n      \"created_at\": \"\",\n      \"updated_at\": \"\"\n    },\n    \"topic\": {\n      \"id\": \"\",\n      \"slug\": \"\",\n      \"title\": \"\"\n    },\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "libs/routers/topic.js",
    "groupTitle": "Topic"
  },
  {
    "type": "post",
    "url": "/topics/:id?page=:page",
    "title": "Get Topic",
    "name": "GetTopic",
    "group": "Topic",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>page (Optional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n  \"success\": true,\n  \"data\": {\n    \"title\": \"\",\n    \"slug\": \"\",\n    \"entries\": [{\n      \"id\": \"\",\n      \"user\": {\n        \"id\": \"\",\n        \"slug\": \"\",\n        \"username\": \"\"\n      },\n      \"text\": \"\",\n      \"upvotes_count\": 0...n,\n      \"downvotes_count\": 0...n,\n      \"created_at\": \"\",\n      \"updated_at\": \"\"\n    }],\n    \"total_page\": 0...n\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "libs/routers/topic.js",
    "groupTitle": "Topic"
  },
  {
    "type": "post",
    "url": "/topics?count=:count&timestamp:timestamp",
    "title": "Get Topics",
    "name": "GetTopics",
    "group": "Topic",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>count (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>timestamp (Optional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n  \"success\": true,\n  \"data\": {\n    \"entries_count\": 0...n,\n    \"topics\": [{\n      \"id\": \"\",\n      \"title\": \"\",\n      \"slug\": \"\",\n      \"count\": 0...n,\n      \"created_at\": \"\",\n      \"updated_at\": \"\"\n    }],\n    \"topics_count\": 0...n\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "libs/routers/topic.js",
    "groupTitle": "Topic"
  }
] });