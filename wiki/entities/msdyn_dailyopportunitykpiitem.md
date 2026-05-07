---
logical: "msdyn_dailyopportunitykpiitem"
display: "Daily kpis for Opportunity"
entitySetName: "msdyn_dailyopportunitykpiitems"
primaryId: "msdyn_dailyopportunitykpiitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Daily kpis for Opportunity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dailyopportunitykpiitem` |
| Display name | Daily kpis for Opportunity |
| Display (plural) | dailyopportunitykpiitems |
| Schema name | `msdyn_dailyopportunitykpiitem` |
| Entity set (Web API) | `msdyn_dailyopportunitykpiitems` |
| Primary id attribute | `msdyn_dailyopportunitykpiitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dailyopportunitykpiitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dailyopportunitykpiitems(<guid>)
POST /api/data/v9.2/msdyn_dailyopportunitykpiitems
PATCH /api/data/v9.2/msdyn_dailyopportunitykpiitems(<guid>)
DELETE /api/data/v9.2/msdyn_dailyopportunitykpiitems(<guid>)
```

## Attributes

Writable: **19** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_computationaccuracy`, `msdyn_dailyopportunitykpiitemId`, `msdyn_date`, `msdyn_emailsreceived`, `msdyn_emailssent`, `msdyn_entityid`, `msdyn_liemailssent`, `msdyn_meetingsreceived`, `msdyn_meetingssent`, `msdyn_name`, `msdyn_opportunityId`, `msdyn_phonecallsmade`, `msdyn_phonecallsreceived`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dailyopportunitykpiitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dailyopportunitykpiitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dailyopportunitykpiitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dailyopportunitykpiitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_opportunity_dailyopportunitykpiitem_entityid` | [opportunity](opportunity.md) | `msdyn_entityid` | `msdyn_entityid` |
| `organization_msdyn_dailyopportunitykpiitem` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dailyopportunitykpiitem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dailyopportunitykpiitem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dailyopportunitykpiitem_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dailyopportunitykpiitem_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dailyopportunitykpiitem_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dailyopportunitykpiitem_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dailyopportunitykpiitem.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_dailyopportunitykpiitem.md) on 2026-05-06.