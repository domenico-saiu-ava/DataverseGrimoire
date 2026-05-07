---
logical: "msdyn_dailycontactkpiitem"
display: "Daily kpis for contact"
entitySetName: "msdyn_dailycontactkpiitems"
primaryId: "msdyn_dailycontactkpiitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Daily kpis for contact

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dailycontactkpiitem` |
| Display name | Daily kpis for contact |
| Display (plural) | dailycontactkpiitems |
| Schema name | `msdyn_dailycontactkpiitem` |
| Entity set (Web API) | `msdyn_dailycontactkpiitems` |
| Primary id attribute | `msdyn_dailycontactkpiitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dailycontactkpiitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dailycontactkpiitems(<guid>)
POST /api/data/v9.2/msdyn_dailycontactkpiitems
PATCH /api/data/v9.2/msdyn_dailycontactkpiitems(<guid>)
DELETE /api/data/v9.2/msdyn_dailycontactkpiitems(<guid>)
```

## Attributes

Writable: **19** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_computationaccuracy`, `msdyn_contactId`, `msdyn_dailycontactkpiitemId`, `msdyn_date`, `msdyn_emailsreceived`, `msdyn_emailssent`, `msdyn_entityid`, `msdyn_liemailssent`, `msdyn_meetingsreceived`, `msdyn_meetingssent`, `msdyn_name`, `msdyn_phonecallsmade`, `msdyn_phonecallsreceived`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dailycontactkpiitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dailycontactkpiitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dailycontactkpiitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dailycontactkpiitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_contact_dailycontactkpiitem_entityid` | [contact](contact.md) | `msdyn_entityid` | `msdyn_entityid` |
| `organization_msdyn_dailycontactkpiitem` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dailycontactkpiitem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dailycontactkpiitem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dailycontactkpiitem_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dailycontactkpiitem_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dailycontactkpiitem_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dailycontactkpiitem_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dailycontactkpiitem.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_dailycontactkpiitem.md) on 2026-05-06.