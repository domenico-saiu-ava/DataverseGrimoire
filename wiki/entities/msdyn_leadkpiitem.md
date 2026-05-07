---
logical: "msdyn_leadkpiitem"
display: "Lead KPI Item"
entitySetName: "msdyn_leadkpiitems"
primaryId: "msdyn_leadkpiitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Lead KPI Item

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_leadkpiitem` |
| Display name | Lead KPI Item |
| Display (plural) | Lead KPI Items |
| Schema name | `msdyn_leadkpiitem` |
| Entity set (Web API) | `msdyn_leadkpiitems` |
| Primary id attribute | `msdyn_leadkpiitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_leadkpiitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_leadkpiitems(<guid>)
POST /api/data/v9.2/msdyn_leadkpiitems
PATCH /api/data/v9.2/msdyn_leadkpiitems(<guid>)
DELETE /api/data/v9.2/msdyn_leadkpiitems(<guid>)
```

## Attributes

Writable: **42** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_acilastupdatetimestamp`, `msdyn_averagefirstresponsetimebytheminhrs`, `msdyn_averagefirstresponsetimebyusinhrs`, `msdyn_computationaccuracy`, `msdyn_date`, `msdyn_emailattachmentopens`, `msdyn_emaillinksclicked`, `msdyn_emailsreceived`, `msdyn_emailssent`, `msdyn_facetimewithcustomer`, `msdyn_lastactivitybyteam`, `msdyn_lastactivitydirection`, `msdyn_lastactivityid`, `msdyn_lastactivitytype`, `msdyn_leadid`, `msdyn_leadkpiitemId`, `msdyn_liemailssent`, `msdyn_meetingsreceived`, `msdyn_meetingssent`, `msdyn_name`, `msdyn_nextactivitybyteam`, `msdyn_nextactivitydirection`, `msdyn_nextactivityid`, `msdyn_nextactivitytype`, `msdyn_openedemails`, `msdyn_phonecallsmade`, `msdyn_phonecallsreceived`, `msdyn_relationshiphealthscorestate`, `msdyn_relationshiphealthscorevalue`, `msdyn_relationshiphealthtrend`, `msdyn_responseratebythem`, `msdyn_responseratebyus`, `msdyn_timespentbycustomer`, `msdyn_timespentbycustomer_calculated`, `msdyn_timespentbyteam`, `msdyn_timespentbyteam_calculated`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_leadkpiitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_leadkpiitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_leadkpiitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_leadkpiitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_lead_msdyn_leadkpiitem_leadid` | [lead](lead.md) | `msdyn_leadid` | `msdyn_leadid` |
| `organization_msdyn_leadkpiitem` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_leadkpiitem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadkpiitem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadkpiitem_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadkpiitem_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_leadkpiitem_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadkpiitem_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_leadkpiitem_lead_leadkpiid` | _n/a_ | `msdyn_leadkpiid` | _n/a_ |


## Source

Generated from [msdyn_leadkpiitem.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_leadkpiitem.md) on 2026-05-06.