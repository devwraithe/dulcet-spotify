import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class InputField extends StatefulWidget {
  InputField({
    Key? key,
    required this.label,
    required this.labelColor,
    required this.fieldBorderColor,
    required this.fieldFocusedBorderColor,
    required this.fieldColor,
    required this.fieldIcon,
    required this.iconColor,
    required this.textColor,
    this.onInputSave,
  }) : super(key: key);

  final String label;
  final Color labelColor;
  final Color fieldBorderColor;
  final Color fieldFocusedBorderColor;
  final Color fieldColor;
  final String fieldIcon;
  final Color iconColor;
  final Color textColor;
  Function(String?)? onInputSave;

  @override
  State<InputField> createState() => _InputFieldState();
}

class _InputFieldState extends State<InputField> {
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          widget.label,
          style: TextStyle(
            fontSize: 13,
            color: widget.labelColor,
          ),
        ),
        const SizedBox(height: 8),
        TextFormField(
          style: TextStyle(
            color: widget.textColor,
            fontSize: 16,
          ),
          onSaved: widget.onInputSave,
          keyboardType: TextInputType.text,
          decoration: InputDecoration(
            isDense: true,
            suffixIconConstraints: const BoxConstraints(
              minWidth: 22.5,
              minHeight: 22.5,
            ),
            suffixIcon: Container(
              padding: const EdgeInsets.only(right: 18),
              child: SvgPicture.asset(widget.fieldIcon,
                  color: widget.iconColor,
                  height: 22.5,
                  width: 22.5,
                  semanticsLabel: '$widget.label icon'),
            ),
            contentPadding: const EdgeInsets.fromLTRB(20, 18, 20, 18),
            filled: true,
            fillColor: widget.fieldColor,
            focusedBorder: OutlineInputBorder(
              borderSide:
                  BorderSide(color: widget.fieldFocusedBorderColor, width: 2.5),
              borderRadius: BorderRadius.circular(7.0),
            ),
            enabledBorder: OutlineInputBorder(
              borderSide:
                  BorderSide(color: widget.fieldBorderColor, width: 2.35),
              borderRadius: BorderRadius.circular(7.0),
            ),
          ),
        ),
      ],
    );
  }
}
