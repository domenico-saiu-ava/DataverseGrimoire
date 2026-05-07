---
logical: "resource"
display: "Resource"
entitySetName: "resources"
primaryId: "resourceid"
primaryName: "name"
tableType: "Standard"
ownership: "BusinessOwned"
---

# Resource

User or facility/equipment that can be scheduled for a service.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `resource` |
| Display name | Resource |
| Display (plural) | Resources |
| Schema name | `Resource` |
| Entity set (Web API) | `resources` |
| Primary id attribute | `resourceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | BusinessOwned |

## Web API examples

```http
GET /api/data/v9.2/resources?$select=name&$top=10
GET /api/data/v9.2/resources(<guid>)
POST /api/data/v9.2/resources
PATCH /api/data/v9.2/resources(<guid>)
DELETE /api/data/v9.2/resources(<guid>)
```

## Attributes

Writable: **14** · Read-only: **4**

### Writable

`BusinessUnitId`, `CalendarId`, `DisplayInServiceViews`, `EntityImage`, `ImportSequenceNumber`, `IsDisabled`, `Name`, `ObjectTypeCode`, `OrganizationId`, `OverriddenCreatedOn`, `ResourceId`, `SiteId`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_resources` | [businessunit](businessunit.md) | `businessunitid` | `businessunitid` |
| `equipment_resources` | [equipment](equipment.md) | `resourceid` | `resourceid_equipment` |
| `organization_resources` | [organization](organization.md) | `organizationid` | `organizationid` |
| `resourcespec_resources` | [resourcespec](resourcespec.md) | `resourceid` | `resourceid_resourcespec` |
| `site_resources` | [site](site.md) | `siteid` | `siteid` |
| `systemuser_resources` | [systemuser](systemuser.md) | `resourceid` | `resourceid_systemuser` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Resource_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Resource_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `resource_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `resource_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `Resource_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [resource.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/resource.md) on 2026-05-06.