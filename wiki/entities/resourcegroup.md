---
logical: "resourcegroup"
display: "Scheduling Group"
entitySetName: "resourcegroups"
primaryId: "resourcegroupid"
primaryName: "name"
tableType: "Standard"
ownership: "BusinessOwned"
---

# Scheduling Group

Resource group or team whose members can be scheduled for a service.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `resourcegroup` |
| Display name | Scheduling Group |
| Display (plural) | Scheduling Groups |
| Schema name | `ResourceGroup` |
| Entity set (Web API) | `resourcegroups` |
| Primary id attribute | `resourcegroupid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | BusinessOwned |

## Web API examples

```http
GET /api/data/v9.2/resourcegroups?$select=name&$top=10
GET /api/data/v9.2/resourcegroups(<guid>)
POST /api/data/v9.2/resourcegroups
PATCH /api/data/v9.2/resourcegroups(<guid>)
DELETE /api/data/v9.2/resourcegroups(<guid>)
```

## Attributes

Writable: **9** · Read-only: **2**

### Writable

`BusinessUnitId`, `GroupTypeCode`, `ImportSequenceNumber`, `Name`, `ObjectTypeCode`, `OverriddenCreatedOn`, `ResourceGroupId`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_resource_groups` | [businessunit](businessunit.md) | `businessunitid` | `businessunitid` |
| `constraintbasedgroup_resource_groups` | [constraintbasedgroup](constraintbasedgroup.md) | `resourcegroupid` | `resourcegroupid_constraintbasedgroup` |
| `organization_resource_groups` | [organization](organization.md) | `organizationid` | `organizationid` |
| `team_resource_groups` | [team](team.md) | `resourcegroupid` | `resourcegroupid_team` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ResourceGroup_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ResourceGroup_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `resourcegroup_connections1` | _n/a_ | `record1id` | _n/a_ |
| `resourcegroup_connections2` | _n/a_ | `record2id` | _n/a_ |
| `ResourceGroup_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `ResourceGroup_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `resourcegroup_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `resourcegroup_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `ResourceGroup_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [resourcegroup.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/resourcegroup.md) on 2026-05-06.