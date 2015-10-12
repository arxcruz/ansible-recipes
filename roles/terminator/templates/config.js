[global_config]
  always_split_with_profile = True
  enabled_plugins = LaunchpadCodeURLHandler, LaunchpadBugURLHandler
  handle_size = 1
  window_state = maximise
[keybindings]
  close_term = <Alt>w
  go_next = <Alt>bracketright
  go_prev = <Alt>bracketleft
  split_horiz = <Alt>o
  split_vert = <Alt>e
  switch_to_tab_1 = <Alt>1
  switch_to_tab_2 = <Alt>2
  switch_to_tab_3 = <Alt>3
  switch_to_tab_4 = <Alt>4
  switch_to_tab_5 = <Alt>5
  switch_to_tab_6 = <Alt>6
  switch_to_tab_7 = <Alt>7
  switch_to_tab_8 = <Alt>8
  switch_to_tab_9 = <Alt>9
[layouts]
  [[default]]
    [[[child1]]]
      parent = window0
      profile = Transparent
      type = Terminal
    [[[window0]]]
      parent = ""
      type = Window
[plugins]
[profiles]
  [[default]]
    background_darkness = 0.72
    background_image = None
    cursor_color = "#ffffff"
    palette = "#000000:#cd0000:#00cd00:#cdcd00:#1e90ff:#cd00cd:#00cdcd:#e5e5e5:#4c4c4c:#ff0000:#00ff00:#ffff00:#4682b4:#ff00ff:#00ffff:#ffffff"
    scrollback_infinite = True
    show_titlebar = False
  [[Transparent]]
    background_darkness = 0.83
    background_image = None
    background_type = transparent
    font = Droid Sans Mono for Powerline 10
    foreground_color = "#ffffff"
    scrollback_infinite = True
    scrollbar_position = hidden
    show_titlebar = False
    use_system_font = False
