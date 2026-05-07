---
logical: "msdyn_dailyleadkpiitem"
display: "Daily kpis for lead"
entitySetName: "msdyn_dailyleadkpiitems"
primaryId: "msdyn_dailyleadkpiitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Daily kpis for lead

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dailyleadkpiitem` |
| Display name | Daily kpis for lead |
| Display (plural) | dailyleadkpiitems |
| Schema name | `msdyn_dailyleadkpiitem` |
| Entity set (Web API) | `msdyn_dailyleadkpiitems` |
| Primary id attribute | `msdyn_dailyleadkpiitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dailyleadkpiitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dailyleadkpiitems(<guid>)
POST /api/data/v9.2/msdyn_dailyleadkpiitems
PATCH /api/data/v9.2/msdyn_dailyleadkpiitems(<guid>)
DELETE /api/data/v9.2/msdyn_dailyleadkpiitems(<guid>)
```

## Attributes

Writable: **19** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_computationaccuracy`, `msdyn_dailyleadkpiitemId`, `msdyn_date`, `msdyn_emailsreceived`, `msdyn_emailssent`, `msdyn_entityid`, `msdyn_leadId`, `msdyn_liemailssent`, `msdyn_meetingsreceived`, `msdyn_meetingssent`, `msdyn_name`, `msdyn_phonecallsmade`, `msdyn_phonecallsreceived`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dailyleadkpiitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dailyleadkpiitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dailyleadkpiitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dailyleadkpiitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_lead_dailyleadkpiitem_entityid` | [lead](lead.md) | `msdyn_entityid` | `msdyn_entityid` |
| `organization_msdyn_dailyleadkpiitem` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dailyleadkpiitem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dailyleadkpiitem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dailyleadkpiitem_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dailyleadkpiitem_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dailyleadkpiitem_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dailyleadkpiitem_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dailyleadkpiitem.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_dailyleadkpiitem.md) on 2026-05-06.