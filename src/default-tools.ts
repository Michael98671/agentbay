export const defaultTools = [
  {
    name: 'get_resource',
    description: 'The command to retrieve a wuying mcp runtime URL when user wants to get access to this runtime. Each retrieved URL will expire after a single use',
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: 'system_screenshot',
    description: 'Captures a full-screen screenshot of the current display and returns a shareable URL. The screenshot is automatically processed and stored securely. The generated URL will expire after 64 minutes for security purposes.',
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: 'release_resource',
    description: 'release resource when task finished',
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: 'start_app',
    description: 'Start a specified application using the provided command and optional working directory. Returns a list of processes associated with the launched application, including their process names, PIDs, and startup commands.',
    inputSchema: {
      type: "object",
      properties: {
        command: {
          type: "string",
          description: "The command to start the application"
        },
        working_directory: {
          type: "string",
          description: "Optional working directory for the application"
        }
      },
      required: ["command"]
    }
  },
  {
    name: 'stop_app_by_pname',
    description: 'Stop all processes associated with a specified process name. Use with caution as this will forcefully terminate the specified process.',
    inputSchema: {
      type: "object",
      properties: {
        process_name: {
          type: "string",
          description: "The name of the process to terminate"
        }
      },
      required: ["process_name"]
    }
  },
  {
    name: 'stop_app_by_pid',
    description: 'Terminate a specific process identified by its Process ID. Use with caution as this will forcefully terminate the specified process.',
    inputSchema: {
      type: "object",
      properties: {
        pid: {
          type: "number",
          description: "The Process ID to terminate"
        }
      },
      required: ["pid"]
    }
  },
  {
    name: 'stop_app_by_cmd',
    description: 'Terminate an application using the provided stop command. Use with caution as this will forcefully terminate the specified process.',
    inputSchema: {
      type: "object",
      properties: {
        command: {
          type: "string",
          description: "The stop command to execute"
        }
      },
      required: ["command"]
    }
  },
  {
    name: 'list_visible_apps',
    description: 'List all applications with visible windows, including their associated process information. Returns a list of processes that have visible windows, including their process names, PIDs, and startup commands.',
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: 'get_installed_apps',
    description: 'Retrieve a list of installed applications on the system. Supports filtering by Start Menu entries and Desktop shortcuts, with an option to exclude system applications. Returns application details including name, start command, optional stop command, and working directory.',
    inputSchema: {
      type: "object",
      properties: {
        include_start_menu: {
          type: "boolean",
          description: "Include Start Menu entries"
        },
        include_desktop: {
          type: "boolean",
          description: "Include Desktop shortcuts"
        },
        exclude_system: {
          type: "boolean",
          description: "Exclude system applications"
        }
      },
      required: []
    }
  },
  {
    name: 'create_directory',
    description: 'Create a new directory or ensure a directory exists. Can create multiple nested directories in one operation. If the directory already exists, this operation will succeed silently.',
    inputSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "The directory path to create"
        }
      },
      required: ["path"]
    }
  },
  {
    name: 'edit_file',
    description: 'Make line-based edits to a text file. Each edit replaces exact line sequences with new content. Returns a git-style diff showing the changes made.',
    inputSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "The file path to edit"
        },
        edits: {
          type: "array",
          description: "Array of edit operations",
          items: {
            type: "object",
            properties: {
              old_text: {
                type: "string",
                description: "The text to replace"
              },
              new_text: {
                type: "string",
                description: "The replacement text"
              }
            },
            required: ["old_text", "new_text"]
          }
        }
      },
      required: ["path", "edits"]
    }
  },
  {
    name: 'get_file_info',
    description: 'Retrieve detailed metadata about a file or directory. Returns comprehensive information including size, creation time, last modified time, permissions, and type.',
    inputSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "The file or directory path"
        }
      },
      required: ["path"]
    }
  },
  {
    name: 'read_file',
    description: "Read the contents of a file from the file system. You can specify an optional 'offset' (in bytes) to start reading from a specific position, and an optional 'length' (in bytes) to limit how many bytes to read.",
    inputSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "The file path to read"
        },
        offset: {
          type: "number", 
          description: "Optional byte offset to start reading from"
        },
        length: {
          type: "number",
          description: "Optional number of bytes to read"
        }
      },
      required: ["path"]
    }
  },
  {
    name: 'read_multiple_files',
    description: "Read the contents of multiple files simultaneously. This is more efficient than reading files one by one when you need to analyze or compare multiple files.",
    inputSchema: {
      type: "object",
      properties: {
        paths: {
          type: "array",
          description: "Array of file paths to read",
          items: {
            type: "string"
          }
        }
      },
      required: ["paths"]
    }
  },
  {
    name: 'list_directory',
    description: 'Get a detailed listing of all files and directories in a specified path. Results clearly distinguish between files and directories with [FILE] and [DIR] prefixes.',
    inputSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "The directory path to list"
        }
      },
      required: ["path"]
    }
  },
  {
    name: 'move_file',
    description: 'Move or rename files and directories. Can move files between directories and rename them in a single operation. If the destination exists, the operation will fail.',
    inputSchema: {
      type: "object",
      properties: {
        source: {
          type: "string",
          description: "The source file or directory path"
        },
        destination: {
          type: "string", 
          description: "The destination path"
        }
      },
      required: ["source", "destination"]
    }
  },
  {
    name: 'search_files',
    description: "Recursively search for files and directories matching a pattern. Searches through all subdirectories from the starting path. The search is case-sensitive and matches partial names.",
    inputSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "The starting directory path to search from"
        },
        pattern: {
          type: "string",
          description: "The search pattern to match"
        }
      },
      required: ["path", "pattern"]
    }
  },
  {
    name: 'write_file',
    description: "Create a new file or write content to an existing file. You can choose to completely overwrite the file or append to the end by specifying the 'mode' parameter.",
    inputSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "The file path to write to"
        },
        content: {
          type: "string",
          description: "The content to write"
        },
        mode: {
          type: "string",
          enum: ["overwrite", "append"],
          description: "Write mode: overwrite (default) or append"
        }
      },
      required: ["path", "content"]
    }
  },
  {
    name: 'oss_upload_annon',
    description: 'Upload a local file or directory to the specified URL using HTTP PUT. If a directory is specified, it will be compressed into a zip file before uploading.',
    inputSchema: {
      type: "object",
      properties: {
        local_path: {
          type: "string",
          description: "The local file or directory path to upload"
        },
        url: {
          type: "string",
          description: "The target URL to upload to"
        }
      },
      required: ["local_path", "url"]
    }
  },
  {
    name: 'oss_download',
    description: 'Download an object from the specified OSS bucket to the given local path. Note: You must call the oss_env_init tool to initialize OSS environment variables before using this tool.',
    inputSchema: {
      type: "object",
      properties: {
        bucket: {
          type: "string",
          description: "The OSS bucket name"
        },
        object_key: {
          type: "string",
          description: "The object key in the bucket"
        },
        local_path: {
          type: "string",
          description: "The local path to save the downloaded file"
        }
      },
      required: ["bucket", "object_key", "local_path"]
    }
  },
  {
    name: 'oss_env_init',
    description: 'Create and initialize OSS environment variables with the specified endpoint, access key ID, access key secret, security token, and region.',
    inputSchema: {
      type: "object",
      properties: {
        endpoint: {
          type: "string",
          description: "OSS endpoint URL"
        },
        access_key_id: {
          type: "string", 
          description: "Access Key ID"
        },
        access_key_secret: {
          type: "string",
          description: "Access Key Secret"
        },
        security_token: {
          type: "string",
          description: "Security Token"
        },
        region: {
          type: "string",
          description: "OSS region"
        }
      },
      required: ["endpoint", "access_key_id", "access_key_secret", "region"]
    }
  },
  {
    name: 'oss_download_annon',
    description: 'Download a file from the specified URL to the given local path. If the parent directory does not exist, it will be created automatically.',
    inputSchema: {
      type: "object",
      properties: {
        url: {
          type: "string",
          description: "The URL to download from"
        },
        local_path: {
          type: "string",
          description: "The local path to save the file"
        }
      },
      required: ["url", "local_path"]
    }
  },
  {
    name: 'oss_upload',
    description: 'Upload a local file or directory to the specified OSS bucket. Note: You must call the oss_env_init tool to initialize OSS environment variables before using this tool.',
    inputSchema: {
      type: "object",
      properties: {
        bucket: {
          type: "string",
          description: "The OSS bucket name"
        },
        local_path: {
          type: "string",
          description: "The local file or directory path to upload"
        },
        object_key: {
          type: "string",
          description: "Optional object key in OSS (defaults to filename)"
        }
      },
      required: ["bucket", "local_path"]
    }
  },
  {
    name: 'browser_snapshot',
    description: 'Capture accessibility snapshot of the current page, this is better than screenshot',
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: 'browser_click',
    description: 'Perform click on a web page',
    inputSchema: {
      type: "object",
      properties: {
        selector: {
          type: "string",
          description: "CSS selector or element identifier"
        }
      },
      required: ["selector"]
    }
  },
  {
    name: 'browser_drag',
    description: 'Perform drag and drop between two elements',
    inputSchema: {
      type: "object",
      properties: {
        source: {
          type: "string",
          description: "Source element selector"
        },
        target: {
          type: "string", 
          description: "Target element selector"
        }
      },
      required: ["source", "target"]
    }
  },
  {
    name: 'browser_hover',
    description: 'Hover over element on page',
    inputSchema: {
      type: "object",
      properties: {
        selector: {
          type: "string",
          description: "CSS selector or element identifier"
        }
      },
      required: ["selector"]
    }
  },
  {
    name: 'browser_type',
    description: 'Type text into editable element',
    inputSchema: {
      type: "object",
      properties: {
        selector: {
          type: "string",
          description: "CSS selector for the input element"
        },
        text: {
          type: "string",
          description: "Text to type"
        }
      },
      required: ["selector", "text"]
    }
  },
  {
    name: 'browser_select_option',
    description: 'Select an option in a dropdown',
    inputSchema: {
      type: "object",
      properties: {
        selector: {
          type: "string",
          description: "CSS selector for the select element"
        },
        value: {
          type: "string",
          description: "Option value to select"
        }
      },
      required: ["selector", "value"]
    }
  },
  {
    name: 'browser_tab_list',
    description: 'List browser tabs',
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: 'browser_tab_new',
    description: 'Open a new tab',
    inputSchema: {
      type: "object",
      properties: {
        url: {
          type: "string",
          description: "Optional URL to navigate to in the new tab"
        }
      },
      required: []
    }
  },
  {
    name: 'browser_tab_select',
    description: 'Select a tab by index',
    inputSchema: {
      type: "object",
      properties: {
        index: {
          type: "number",
          description: "Tab index to select"
        }
      },
      required: ["index"]
    }
  },
  {
    name: 'browser_tab_close',
    description: 'Close a tab',
    inputSchema: {
      type: "object",
      properties: {
        index: {
          type: "number",
          description: "Tab index to close"
        }
      },
      required: ["index"]
    }
  },
  {
    name: 'browser_generate_playwright_test',
    description: 'Generate a Playwright test for given scenario',
    inputSchema: {
      type: "object",
      properties: {
        scenario: {
          type: "string",
          description: "Test scenario description"
        }
      },
      required: ["scenario"]
    }
  },
  {
    name: 'browser_wait_for',
    description: 'Wait for text to appear or disappear or a specified time to pass',
    inputSchema: {
      type: "object",
      properties: {
        condition: {
          type: "string",
          enum: ["text_appear", "text_disappear", "time"],
          description: "Wait condition type"
        },
        text: {
          type: "string",
          description: "Text to wait for (for text conditions)"
        },
        timeout: {
          type: "number",
          description: "Timeout in milliseconds"
        }
      },
      required: ["condition"]
    }
  },
  {
    name: 'browser_take_screenshot',
    description: "Take a screenshot of the current page. You can't perform actions based on the screenshot, use browser_snapshot for actions.",
    inputSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "Optional path to save the screenshot"
        }
      },
      required: []
    }
  },
  {
    name: 'browser_close',
    description: 'Close the page',
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: 'browser_resize',
    description: 'Resize the browser window',
    inputSchema: {
      type: "object",
      properties: {
        width: {
          type: "number",
          description: "Window width in pixels"
        },
        height: {
          type: "number",
          description: "Window height in pixels"
        }
      },
      required: ["width", "height"]
    }
  },
  {
    name: 'browser_console_messages',
    description: 'Returns all console messages',
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: 'browser_handle_dialog',
    description: 'Handle a dialog',
    inputSchema: {
      type: "object",
      properties: {
        action: {
          type: "string",
          enum: ["accept", "dismiss"],
          description: "Dialog action to perform"
        },
        text: {
          type: "string",
          description: "Text to enter in prompt dialogs"
        }
      },
      required: ["action"]
    }
  },
  {
    name: 'browser_file_upload',
    description: 'Upload one or multiple files',
    inputSchema: {
      type: "object",
      properties: {
        selector: {
          type: "string",
          description: "CSS selector for the file input element"
        },
        files: {
          type: "array",
          description: "Array of file paths to upload",
          items: {
            type: "string"
          }
        }
      },
      required: ["selector", "files"]
    }
  },
  {
    name: 'browser_install',
    description: 'Install the browser specified in the config. Call this if you get an error about the browser not being installed.',
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: 'browser_press_key',
    description: 'Press a key on the keyboard',
    inputSchema: {
      type: "object",
      properties: {
        key: {
          type: "string",
          description: "Key to press (e.g., 'Enter', 'Tab', 'Escape')"
        }
      },
      required: ["key"]
    }
  },
  {
    name: 'browser_navigate',
    description: 'Navigate to a URL',
    inputSchema: {
      type: "object",
      properties: {
        url: {
          type: "string",
          description: "URL to navigate to"
        }
      },
      required: ["url"]
    }
  },
  {
    name: 'browser_navigate_back',
    description: 'Go back to the previous page',
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: 'browser_navigate_forward',
    description: 'Go forward to the next page',
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: 'browser_network_requests',
    description: 'Returns all network requests since loading the page',
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: 'browser_pdf_save',
    description: 'Save page as PDF',
    inputSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "Path to save the PDF file"
        }
      },
      required: ["path"]
    }
  },
  {
    name: 'shell',
    description: 'Executes a shell command with timeout and returns the output or an error on linux platform.',
    inputSchema: {
      type: "object",
      properties: {
        command: {
          type: "string",
          description: "The shell command to execute"
        },
        timeout: {
          type: "number",
          description: "Optional timeout in seconds"
        }
      },
      required: ["command"]
    }
  },
  {
    name: 'fullscreen_window',
    description: 'Set a specific window to fullscreen mode by its window ID.',
    inputSchema: {
      type: "object",
      properties: {
        window_id: {
          type: "string",
          description: "The window ID to set to fullscreen"
        }
      },
      required: ["window_id"]
    }
  },
  {
    name: 'list_root_windows',
    description: 'List all root windows with their associated information. Returns a list of root windows, including their window IDs, window titles, process IDs, and process names.',
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: 'get_active_window',
    description: 'Retrieve information about the currently active window. Returns details including window ID, title, process ID (pid), and process name (pname).',
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: 'activate_window',
    description: 'Activate a specific window by its window ID.',
    inputSchema: {
      type: "object",
      properties: {
        window_id: {
          type: "string",
          description: "The window ID to activate"
        }
      },
      required: ["window_id"]
    }
  },
  {
    name: 'maximize_window',
    description: 'Maximize a specific window by its window ID.',
    inputSchema: {
      type: "object",
      properties: {
        window_id: {
          type: "string", 
          description: "The window ID to maximize"
        }
      },
      required: ["window_id"]
    }
  },
  {
    name: 'minimize_window',
    description: 'Minimize a specific window by its window ID.',
    inputSchema: {
      type: "object",
      properties: {
        window_id: {
          type: "string",
          description: "The window ID to minimize"
        }
      },
      required: ["window_id"]
    }
  },
  {
    name: 'restore_window',
    description: 'Restore a specific window to its normal state by its window ID.',
    inputSchema: {
      type: "object",
      properties: {
        window_id: {
          type: "string",
          description: "The window ID to restore"
        }
      },
      required: ["window_id"]
    }
  },
  {
    name: 'close_window',
    description: 'Close a specific window by its window ID.',
    inputSchema: {
      type: "object",
      properties: {
        window_id: {
          type: "string",
          description: "The window ID to close"
        }
      },
      required: ["window_id"]
    }
  },
  {
    name: 'resize_window',
    description: 'Resize a specific window by its window ID.',
    inputSchema: {
      type: "object",
      properties: {
        window_id: {
          type: "string",
          description: "The window ID to resize"
        },
        width: {
          type: "number",
          description: "New window width"
        },
        height: {
          type: "number", 
          description: "New window height"
        }
      },
      required: ["window_id", "width", "height"]
    }
  },
  {
    name: 'focus_mode',
    description: 'Enable or disable focus mode. When focus mode is enabled, only windows from the currently active process and its child processes are allowed to remain in the foreground.',
    inputSchema: {
      type: "object",
      properties: {
        enabled: {
          type: "boolean",
          description: "Whether to enable or disable focus mode"
        }
      },
      required: ["enabled"]
    }
  }
];