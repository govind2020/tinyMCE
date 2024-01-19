tinymce.PluginManager.add("example", (editor, url) => {
  const openDialog = () =>
    editor.windowManager.open({
      title: "Cell Border Properties",
      body: {
        type: "panel",
        items: [
          {
            type: "input",
            name: "borderWidth",
            label: "Border Width",
            placeholder: "e.g., 2px"
          },
          {
            type: "selectbox",
            name: "borderStyle",
            label: "Border Style",
            items: [
              { value: "", text: "None" },
              { value: "solid", text: "Solid" },
              { value: "dotted", text: "Dotted" },
              { value: "dashed", text: "Dashed" }
            ]
          },
          {
            type: "selectbox",
            name: "borderSide",
            label: "Border Side",
            items: [
              { value: "", text: "None" },
              { value: "left", text: "Left" },
              { value: "right", text: "Right" },
              { value: "top", text: "Top" },
              { value: "bottom", text: "Bottom" }
            ]
          },
          {
            type: "colorpicker",
            name: "borderColor",
            label: "Border Color",
            value: "#000000"
          }
        ]
      },
      buttons: [
        {
          type: "cancel",
          text: "Close"
        },
        {
          type: "submit",
          text: "Save",
          buttonType: "primary"
        }
      ],
      onSubmit: (api) => {
        const data = api.getData();

        const borderStyle = data.borderStyle || "";

        const borderColor = data.borderColor || "";

        const borderSide = data.borderSide || "";

        const borderWidth = data.borderWidth || "";

        const selectedCells = tinymce.activeEditor.dom.getParents(tinymce.activeEditor.selection.getNode(), 'td');

        // Apply the selected border style to each selected cell
        selectedCells.forEach((cell) => {
          
          console.log("borderSide--->", borderSide);

          if (borderSide === "top") {
            cell.style.borderTopWidth = borderWidth;
            cell.style.borderTopStyle = borderStyle;
            cell.style.borderTopColor = borderColor;
          } else if (borderSide === "right") {
            cell.style.borderRightWidth = borderWidth;
            cell.style.borderRightStyle = borderStyle;
            cell.style.borderRightColor = borderColor;
          } else if (borderSide === "bottom") {
            cell.style.borderBottomWidth = borderWidth;
            cell.style.borderBottomStyle = borderStyle;
            cell.style.borderBottomColor = borderColor;
          } else if (borderSide === "left") {
            cell.style.borderLeftWidth = borderWidth;
            cell.style.borderLeftStyle = borderStyle;
            cell.style.borderLeftColor = borderColor;
          }else{
            alert("fill the fields")
          }
        });
        
        // Close the dialog
        api.close();
      }
    });

  /* Add a button that opens the window */
  editor.ui.registry.addButton("example", {
    text: "Cell Border Properties",
    onAction: () => {
      openDialog();
    }
  });

  /* Adds a menu item */
  editor.ui.registry.addMenuItem("example", {
    text: "Cell Border Properties",
    onAction: () => {
      openDialog();
    }
  });

  return {
    getMetadata: () => ({
      name: "Cell Border Properties",
      url: "http://exampleplugindocsurl.com"
    })
  };
  
});
