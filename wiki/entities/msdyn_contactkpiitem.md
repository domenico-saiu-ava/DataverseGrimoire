---
logical: "msdyn_contactkpiitem"
display: "Contact KPI Item"
entitySetName: "msdyn_contactkpiitems"
primaryId: "msdyn_contactkpiitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Contact KPI Item

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_contactkpiitem` |
| Display name | Contact KPI Item |
| Display (plural) | Contact KPI Items |
| Schema name | `msdyn_contactkpiitem` |
| Entity set (Web API) | `msdyn_contactkpiitems` |
| Primary id attribute | `msdyn_contactkpiitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_contactkpiitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_contactkpiitems(<guid>)
POST /api/data/v9.2/msdyn_contactkpiitems
PATCH /api/data/v9.2/msdyn_contactkpiitems(<guid>)
DELETE /api/data/v9.2/msdyn_contactkpiitems(<guid>)
```

## Attributes

Writable: **35** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_acilastupdatetimestamp`, `msdyn_averagefirstresponsetimebytheminhrs`, `msdyn_averagefirstresponsetimebyusinhrs`, `msdyn_computationaccuracy`, `msdyn_contactid`, `msdyn_contactkpiitemId`, `msdyn_date`, `msdyn_emailattachmentopens`, `msdyn_emaillinksclicked`, `msdyn_emailsreceived`, `msdyn_emailssent`, `msdyn_facetimewithcustomer`, `msdyn_liemailssent`, `msdyn_meetingsreceived`, `msdyn_meetingssent`, `msdyn_name`, `msdyn_numberofopportunities`, `msdyn_openedemails`, `msdyn_phonecallsmade`, `msdyn_phonecallsreceived`, `msdyn_relationshiphealthscorestate`, `msdyn_relationshiphealthscorevalue`, `msdyn_relationshiphealthtrend`, `msdyn_responseratebythem`, `msdyn_responseratebyus`, `msdyn_timespentbycustomer`, `msdyn_timespentbycustomer_calculated`, `msdyn_timespentbyteam`, `msdyn_timespentbyteam_calculated`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_contactkpiitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_contactkpiitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_contactkpiitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_contactkpiitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_contact_msdyn_contactkpiitem_contactid` | [contact](contact.md) | `msdyn_contactid` | `msdyn_contactid` |
| `organization_msdyn_contactkpiitem` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_contactkpiitem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_contactkpiitem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_contactkpiitem_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_contactkpiitem_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_contactkpiitem_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_contactkpiitem_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_contactkpiitem_contact_contactkpiid` | _n/a_ | `msdyn_contactkpiid` | _n/a_ |


## Source

Generated from [msdyn_contactkpiitem.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_contactkpiitem.md) on 2026-05-06.