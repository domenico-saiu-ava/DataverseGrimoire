---
logical: "constraintbasedgroup"
display: "Resource Group"
entitySetName: "constraintbasedgroups"
primaryId: "constraintbasedgroupid"
primaryName: "name"
tableType: "Standard"
ownership: "BusinessOwned"
---

# Resource Group

Group or collection of people, equipment, and/or facilities that can be scheduled.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `constraintbasedgroup` |
| Display name | Resource Group |
| Display (plural) | Resource Groups |
| Schema name | `ConstraintBasedGroup` |
| Entity set (Web API) | `constraintbasedgroups` |
| Primary id attribute | `constraintbasedgroupid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | BusinessOwned |

## Web API examples

```http
GET /api/data/v9.2/constraintbasedgroups?$select=name&$top=10
GET /api/data/v9.2/constraintbasedgroups(<guid>)
POST /api/data/v9.2/constraintbasedgroups
PATCH /api/data/v9.2/constraintbasedgroups(<guid>)
DELETE /api/data/v9.2/constraintbasedgroups(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`BusinessUnitId`, `ConstraintBasedGroupId`, `Constraints`, `Description`, `GroupTypeCode`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_constraint_based_groups` | [businessunit](businessunit.md) | `businessunitid` | `businessunitid_businessunit` |
| `constraintbasedgroup_systemuser` | [systemuser](systemuser.md) | `businessunitid` | `businessunitid_systemuser` |
| `lk_constraintbasedgroup_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_constraintbasedgroup_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_constraintbasedgroup_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_constraintbasedgroup_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_constraint_based_groups` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `constraint_based_group_resource_specs` | _n/a_ | `groupobjectid` | _n/a_ |
| `ConstraintBasedGroup_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ConstraintBasedGroup_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `constraintbasedgroup_connections1` | _n/a_ | `record1id` | _n/a_ |
| `constraintbasedgroup_connections2` | _n/a_ | `record2id` | _n/a_ |
| `constraintbasedgroup_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `constraintbasedgroup_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `ConstraintBasedGroup_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `constraintbasedgroup_resource_groups` | _n/a_ | `resourcegroupid` | _n/a_ |
| `constraintbasedgroup_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `constraintbasedgroup_virtualresourceg` | _n/a_ | `resourcegroupid` | _n/a_ |


## Source

Generated from [constraintbasedgroup.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/constraintbasedgroup.md) on 2026-05-06.