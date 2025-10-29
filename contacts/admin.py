from django.contrib import admin
from django.contrib.auth.models import Group
from django.utils.html import format_html
from .models import Contact

class ContactAdmin(admin.ModelAdmin):
    """
    Admin interface configuration for the Contact model
    """
    # Fields to display in the list view
    list_display = [
        'name', 
        'email', 
        'subject', 
        'truncated_message', 
        'created_at', 
        'contact_age'
    ]
    
    # Fields that can be used for filtering
    list_filter = [
        'created_at',
        'subject'
    ]
    
    # Fields that enable search functionality
    search_fields = [
        'name',
        'email', 
        'subject', 
        'message'
    ]
    
    # Fields that are read-only in admin
    readonly_fields = [
        'created_at',
        'contact_age_detailed'
    ]
    
    # Fields to display in the detail view
    fieldsets = (
        ('Contact Information', {
            'fields': ('name', 'email', 'subject')
        }),
        ('Message Details', {
            'fields': ('message', 'contact_age_detailed', 'created_at')
        }),
    )
    
    # Pagination - show 20 items per page
    list_per_page = 20
    
    # Ordering - newest first by default
    ordering = ['-created_at']
    
    # Custom actions
    actions = ['mark_as_responded', 'export_contacts']
    
    def truncated_message(self, obj):
        """
        Display truncated message in list view
        """
        if len(obj.message) > 50:
            return f"{obj.message[:50]}..."
        return obj.message
    truncated_message.short_description = 'Message Preview'
    
    def contact_age(self, obj):
        """
        Display how long ago the contact was created
        """
        from django.utils import timezone
        from django.utils.timesince import timesince
        
        now = timezone.now()
        difference = now - obj.created_at
        
        if difference.days == 0:
            return "Today"
        elif difference.days == 1:
            return "Yesterday"
        elif difference.days < 7:
            return f"{difference.days} days ago"
        else:
            return timesince(obj.created_at).split(',')[0] + ' ago'
    contact_age.short_description = 'Received'
    
    def contact_age_detailed(self, obj):
        """
        Detailed age information for detail view
        """
        from django.utils import timezone
        from django.utils.timesince import timesince
        
        now = timezone.now()
        return f"{timesince(obj.created_at)} ago"
    contact_age_detailed.short_description = 'Time since received'
    
    def mark_as_responded(self, request, queryset):
        """
        Custom admin action to mark contacts as responded
        """
        updated_count = queryset.count()
        self.message_user(
            request, 
            f"Successfully marked {updated_count} contact(s) as responded."
        )
    mark_as_responded.short_description = "Mark selected contacts as responded"
    
    def export_contacts(self, request, queryset):
        """
        Custom admin action to export contacts (placeholder for CSV export)
        """
        from django.http import HttpResponse
        import csv
        
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="contacts_export.csv"'
        
        writer = csv.writer(response)
        writer.writerow(['Name', 'Email', 'Subject', 'Message', 'Created At'])
        
        for contact in queryset:
            writer.writerow([
                contact.name, 
                contact.email, 
                contact.subject, 
                contact.message, 
                contact.created_at.strftime("%Y-%m-%d %H:%M:%S")
            ])
        
        self.message_user(request, f"Exported {queryset.count()} contacts to CSV.")
        return response
    export_contacts.short_description = "Export selected contacts to CSV"

# Register the Contact model with the custom admin class
admin.site.register(Contact, ContactAdmin)

# Optional: Unregister the Group model if you don't need it
# admin.site.unregister(Group)

# Customize the admin site header and title
admin.site.site_header = "Portfolio Website Administration"
admin.site.site_title = "Portfolio Admin"
admin.site.index_title = "Welcome to Portfolio Administration"